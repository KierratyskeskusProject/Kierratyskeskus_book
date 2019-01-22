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
            width={2}
            value={book.book.isbn}
          />
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
              name="Sivumäärä ja Kuvaukset"
              status={book.book.physicalDescriptions[0] ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.physicalDescriptions[0] ? 'green' : 'red'}
            />
            <Status
              name="Julkaistu"
              status={book.book.publishedDate ? 'ok-circle' : 'remove-circle'}
              statusColor={book.book.publishedDate ? 'green' : 'red'}
            />
            <Status
                name="Tyylilajit"
                status={book.book.genres[0] ? 'ok-circle' : 'remove-circle'}
                statusColor={book.book.genres[0] ? 'green' : 'red'}
            />
            <Status
                name="Alaotsikko"
                status={book.book.description ? 'ok-circle' : 'remove-circle'}
                statusColor={book.book.description ? 'green' : 'red'}
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
