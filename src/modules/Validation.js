import React, { Component } from 'react';
import { connect } from 'react-redux';
import Status from '../components/Status';

class Validation extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="col-md-6 col-sm-12 col-xs-6">
          <div className="contentCon">
            <Status
              name="Otsikko:"
              status={book.book.title ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.title ? 'green' : 'red'}
            />
            <Status
              name="Kirjailijat"
              status={book.book.authors[0] ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.authors[0] ? 'green' : 'red'}
            />
            <Status
              name="Kustantaja:"
              status={book.book.publisher ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.publisher ? 'green' : 'red'}
            />
            <Status
              name="Ulkoasu"
              status={book.book.physicalDescriptions[0] ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.physicalDescriptions[0] ? 'green' : 'red'}
            />
            <Status
              name="Julkaistu"
              status={book.book.publishedDate ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.publishedDate ? 'green' : 'red'}
            />
            <Status
              name="ISBN"
              status={book.book.isbn ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.isbn ? 'green' : 'red'}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book,
});

export default connect(mapStateToProps)(Validation);
