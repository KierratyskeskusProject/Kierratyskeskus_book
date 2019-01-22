const description = (book) => {
    const a = `<p>Kirjailijat: ${book.book.authors}</p>`;
    const g = `<p>Tyylilajit: ${book.book.genres}</p>`;
    const p = `<p>Kustantaja: ${book.book.publisher}</p>`;
    const pc = `<p>Sivumäärä ja Kuvaukset: ${book.book.physicalDescriptions}</p>`;
    const pd = `<p>Julkaistu: ${book.book.publishedDate}</p>`;

    return a + p + pc + pd + g;
};
export default description;
