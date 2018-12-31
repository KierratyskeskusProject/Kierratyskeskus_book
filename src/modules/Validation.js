import React, { Component } from 'react';
import Barcode from 'react-barcode';
import { connect } from 'react-redux';
import Status from '../components/Status';

class Validation extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="col-md-6 col-sm-12 col-xs-6">
          <Barcode
            width={1}
            value={book.book.isbn}
          />

          <div className="contentCon">
            <Status
              name="Title:"
              status={book.book.title ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.title ? 'green' : 'red'}
            />
            <Status
              name="Authors"
              status={book.book.authors[0] ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.authors[0] ? 'green' : 'red'}
            />
            <Status
              name="Publisher:"
              status={book.book.publisher ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.publisher ? 'green' : 'red'}
            />
            <Status
              name="Page count"
              status={book.book.pageCount ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.pageCount ? 'green' : 'red'}
            />
            <Status
              name="Published date"
              status={book.book.publishedDate ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.publishedDate ? 'green' : 'red'}
            />
            <Status
              name="Description"
              status={book.book.description ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.description ? 'green' : 'red'}
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 col-xs-6 image">
          <img src={book.book.imageUrl} alt="book cover" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
});

export default connect(mapStateToProps)(Validation);
