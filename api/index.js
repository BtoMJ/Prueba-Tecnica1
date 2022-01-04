const server = require('./src/app.js');
const { conn, Book } = require('./src/db.js');
const axios = require('axios').default

conn.sync({
  force: true
})
  .then(async () => {

    const apiGoogleBooksResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=ebook&maxResults=40')
    let apiBooks = apiGoogleBooksResponse.data.items

    apiBooks = apiBooks.map(book => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        year: book.volumeInfo.publishedDate,
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        language: book.volumeInfo.language,
        pages: book.volumeInfo.pageCount,
        content_short: book.volumeInfo.description,
        publisher: book.volumeInfo.publisher,
      }
    })

  await Book.bulkCreate(apiBooks).then(console.log("Hecho !!")).catch(console.error)

  console.log('Base de datos conectada correctamente')
  server.listen(3001, () => {
  console.log('Escuchando puerto 3001');
  });
});
