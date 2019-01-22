const description = (book) => {
    const d = `<p>Alaotsikko: ${book.book.description}</p>`;
    const a = `<p>Kirjailijat: ${book.book.authors}</p>`;
    const g = `<p>Tyylilajit: ${book.book.genres}</p>`;
    const p = `<p>Kustantaja: ${book.book.publisher}</p>`;
    const pc = `<p>Sivumäärä ja Kuvaukset: ${book.book.physicalDescriptions}</p>`;
    const pd = `<p>Julkaistu: ${book.book.publishedDate}</p>`;

    return d + a + p + pc + pd + g + d;
};
export default description;
