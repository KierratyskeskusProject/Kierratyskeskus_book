/* eslint-disable import/prefer-default-export */

import { fetchBookBegin, fetchBookFailure, fetchBookSuccess } from '../types';

const fetchBook = (isbn) => {
  const book = {
    isbn: 'xxxxxxxxxxxxx',
    title: '',
    description: '',
    authors: [],
    publisher: '',
    pageCount: '',
    publishedDate: '',
    imageUrl: '',
    msg: 'No book found',
  };

  const validateData = (parameters) => {
    const { bookData, book } = parameters;
    book.isbn = bookData.industryIdentifiers[1]
      ? bookData.industryIdentifiers[1].identifier
      : 'xxxxxxxxxxxxx';
    book.title = bookData.title ? bookData.title : '';
    book.authors = bookData.authors ? bookData.authors : '';
    book.description = bookData.description ? bookData.description : '';
    book.imageUrl = bookData.imageLinks ? bookData.imageLinks.thumbnail : '';
    book.pageCount = bookData.pageCount ? bookData.pageCount : '';
    book.publisher = bookData.publisher ? bookData.publisher : '';
    book.publishedDate = bookData.publishedDate ? bookData.publishedDate : '';
    book.msg = 'Book found';
    return book;
  };

  const action = (dispatch) => {

    const url = `https://api.finna.fi/api/v1/search?lookfor=cleanIsbn.${isbn}&type=AllFields&field[]=title&field[]=authors&field[]=year&field[]=genres&field[]=publishers&field[]=physicalDescriptions&field[]=uniformTitles&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=false&lng=fi`;
    dispatch(fetchBookBegin());

    const request = fetch(url, {
      method: 'GET',
    });
    console.log('request',request);
    return request
      .then(bookData => bookData.json())
      .then(
        (bookJSON) => {
          console.log(bookJSON);
          if (!bookJSON.resultCount <= 0) {
            console.log('bookJSON');
            const bookData = bookJSON.items[0].volumeInfo;
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
