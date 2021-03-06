/* eslint-disable import/prefer-default-export */

import { fetchBookBegin, fetchBookFailure, fetchBookSuccess } from '../types';

const fetchBook = (isbn) => {
  const book = {
    isbn: '',
    title: '',
    authors: [],
    publisher: '',
    physicalDescriptions: [],
    publishedDate: '',
    msg: 'No book found',
  };

  const validateData = (parameters) => {
    const { bookData, book } = parameters;
    book.isbn = bookData.cleanIsbn ? bookData.cleanIsbn : '';
    book.title = bookData.title ? bookData.title : '';
    book.authors = bookData.primaryAuthors ? bookData.primaryAuthors : '';
    book.physicalDescriptions = bookData.physicalDescriptions ? bookData.physicalDescriptions[0] : '';
    book.publisher = bookData.publishers ? bookData.publishers[0] : '';
    book.publishedDate = bookData.year ? bookData.year : '';
    book.msg = 'Book found';
    return book;
  };

  const action = (dispatch) => {
    const url = `https://api.finna.fi/api/v1/search?lookfor=cleanIsbn.${isbn}&type=AllFields&field[]=title&field[]=primaryAuthors&field[]=year&field[]=publishers&field[]=physicalDescriptions&field[]=cleanIsbn&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=false&lng=fi`;
    dispatch(fetchBookBegin());

    const request = fetch(url, {
      method: 'GET',
    });
    // console.log('request',request);
    return request
      .then(bookData => bookData.json())
      .then(
        (bookJSON) => {
          if (!bookJSON.resultCount <= 0) {
            const bookData = bookJSON.records[0];
            validateData({ bookData, book });
            dispatch(fetchBookSuccess(book));
          } else {
            dispatch({ type: '@@INIT' });
          }
        },
        error => dispatch(fetchBookFailure(error)),
      );
  };
  return action;
};

export { fetchBook };
