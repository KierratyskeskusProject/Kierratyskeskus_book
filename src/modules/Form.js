import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import BarcodeReader from 'react-barcode-reader';
import copy from 'clipboard-copy';
import { fetchBook } from '../redux/actions'; // fetchWeight
import description from '../functions/description';

class Form extends Component {
  handleScan = (isbn) => {
    const { fetchBookData } = this.props;
    fetchBookData(isbn);
  };

  handleError = err => err;


  copyThis = async (e, data) => {
    e.preventDefault();
    let d;
    d = data.replace(/<p>/g, '');
    d = d.replace(/<\/p>/g, '\n\n');
    copy(d);
  };

  render() {
    const { book } = this.props;

    return (
      <div className="col-md-12">
        <BarcodeReader onScan={this.handleScan} onError={this.handleError} />

        <div className="col-md-10 whiteBox">{book.book.title}</div>
        <div className="col-md-2 copyIcon">
          <Glyphicon
            glyph="save-file"
            onClick={e => this.copyThis(e, book.book.title)}
          />
        </div>

        <div className="col-md-10 whiteBox">
          <div dangerouslySetInnerHTML={{ __html: description(book) }} />
        </div>
        <div className="col-md-2 copyIcon">
          <Glyphicon
            glyph="save-file"
            onClick={e => this.copyThis(e, description(book))}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
});

const mapDispatchToProps = dispatch => ({
  fetchBookData: payload => dispatch(fetchBook(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
