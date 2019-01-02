import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import BarcodeReader from 'react-barcode-reader';
import copy from 'clipboard-copy';
import { ToastContainer, toast } from 'react-toastify';
import { fetchBook } from '../redux/actions'; // fetchWeight
import description from '../functions/description';

import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {
  handleScan = async (isbn) => {
    const { fetchBookData } = this.props;
    fetchBookData(isbn);
    this.notify('Scan complete', 1);
  };

  handleError = err => err;

  copyThis = (e, data) => {
    let d;
    d = data.replace(/<p>/g, '');
    d = d.replace(/<\/p>/g, '\n\n');
    copy(d);
    this.notify('Copied to clipboard', 0);
  };

  notify = (msg, operation) => {
    switch (operation) {
      case 0:
        return (
          toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
      case 1:
        return (
          toast.info(msg, {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
      default:
        return (
          toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
    }
  };

  render() {
    const { book } = this.props;
    return (
      <div className="col-md-12">
        <ToastContainer autoClose={2000} />
        <BarcodeReader onScan={this.handleScan} onError={this.handleError} />

        <div
          className="col-md-10 whiteBox"
          onClick={e => this.copyThis(e, book.book.title)}
          role="button"
          tabIndex={0}
        >
          {book.book.title}
        </div>
        <div className="col-md-2 copyIcon">
          <Glyphicon
            glyph="save-file"
            onClick={e => this.copyThis(e, book.book.title)}
            tabIndex={0}
          />
        </div>

        <div
          className="col-md-10 whiteBox"
          onClick={e => this.copyThis(e, description(book))}
          role="button"
          tabIndex={0}
        >
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
