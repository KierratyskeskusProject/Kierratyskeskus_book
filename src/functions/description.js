const description = (book) => {
  const d = `<p>${book.book.description}</p>`;
  const a = `<p>Authors: ${book.book.authors.join(', ')}</p>`;
  const p = `<p>Publisher: ${book.book.publisher}</p>`;
  const pc = `<p>Pages: ${book.book.pageCount}</p>`;
  const pd = `<p>Date: ${book.book.publishedDate}</p>`;

  const desc = d + a + p + pc + pd;

  return desc;
};
export default description;
