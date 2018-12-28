const description = (book) => {
  const d = `${book.book.description}\n\n`;
  const a = `Authors: ${book.book.authors.join(', ')}\n\n`;
  const p = `Publisher: ${book.book.publisher}\n\n`;
  const pc = `Pages: ${book.book.pageCount}\n\n`;
  const pd = `Date: ${book.book.publishedDate}\n\n`;

  const desc = d + a + p + pc + pd;

  return desc;
};
export default description;
