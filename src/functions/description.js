const description = (book) => {
  const d = `<p>${book.book.description}</p>`;
  const a = `<p>Kirjailijat: ${book.book.authors.join(', ')}</p>`;
  const p = `<p>Kustantaja: ${book.book.publisher}</p>`;
  const pc = `<p>Sivumäärä: ${book.book.pageCount}</p>`;
  const pd = `<p>Julkaistu: ${book.book.publishedDate}</p>`;

  return d + a + p + pc + pd;
};
export default description;
