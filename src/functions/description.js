const description = (book) => {
  const a = `<p><b>Kirjailijat:</b> ${book.book.authors}</p>`;
  const g = `<p><b>Tyylilajit:</b> ${book.book.genres}</p>`;
  const p = `<p><b>Kustantaja:</b> ${book.book.publisher}</p>`;
  const pc = `<p><b>Sivumäärä ja Kuvaukset:</b> ${book.book.physicalDescriptions}</p>`;
  const pd = `<p><b>Julkaistu:</b> ${book.book.publishedDate}</p>`;
  const isbn = `<p><b>ISBN:</b>${book.book.isbn}</p>`;

  return a + p + pc + pd + g + isbn;
};
export default description;
