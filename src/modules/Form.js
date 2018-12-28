import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import BarcodeReader from 'react-barcode-reader';
import { fetchBook } from '../redux/actions'; // fetchWeight
import InputField from '../components/InputField';
import description from '../functions/description';

class Form extends Component {
  handleScan = (isbn) => {
    const { fetchBookData } = this.props;
    fetchBookData(isbn);
  };

  handleError = err => err;

  updateField = () => false;

  render() {
    const { book } = this.props;

    return (
      <div className="col-md-10">
        <BarcodeReader onScan={this.handleScan} onError={this.handleError} />
        {/* input eiting has been disabled for now. */}
        <form>
          <FormGroup>
            <InputField
              type="text"
              icon="tag"
              placeholder="Title"
              value={book.book.title}
              change={() => this.updateField}
              name="title"
            />

            <FormControl
              componentClass="textarea"
              placeholder="Description"
              rows={20}
              readOnly
              // use description function to construct the description layout
              value={description(book)}
            />

            <InputField
              type="number"
              icon="scale"
              placeholder="Total weight"
              value="0" // static value untill scale is avalible.
              name="weight"
            />
          </FormGroup>
        </form>
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
