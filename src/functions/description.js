const description = (book) => {
  const a = `<p>Kirjailijat: ${book.book.authors}</p>`;
  const p = `<p>Kustantaja: ${book.book.publisher}</p>`;
  const pc = `<p>Ulkoasu: ${book.book.physicalDescriptions}</p>`;
  const pd = `<p>Julkaistu: ${book.book.publishedDate}</p>`;
  const isbn = `<p>ISBN:${book.book.isbn}</p>`;

  return (a + p + pc + pd + isbn);
};
export default description;
