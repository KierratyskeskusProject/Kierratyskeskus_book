import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import BarcodeReader from 'react-barcode-reader';
import { fetchBook } from '../redux/actions'; // fetchWeight
import InputField from '../components/InputField';

class Form extends Component {
  // for testing without a scanner
  componentDidMount() {
    /*
    const {fetchBook} = this.props;
    console.log('auto book fetch happens in form.js componentDidMount');
    fetchBook(9780470876411);
      //(all included) 9780470876411
      //(some is missing) 9783161484100
      //(no book) 9000161484100
    */
  }
  // remove functin when scanner is used

  handleScan = (isbn) => {
    // 9780321205681
    const { fetchBookData } = this.props;
    fetchBookData(isbn);
  };

  handleError = (err) => {
    console.error(err);
  };

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
              value={book.book.description}
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
