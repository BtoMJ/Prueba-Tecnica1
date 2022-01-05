const { Router } = require('express');
const axios = require('axios')
const router = Router();
const { Book } = require('../db.js');

// const getApiInfo = async () => {

//   const apiGoogleBooksResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=ebook')
//   const apiInfo = await apiGoogleBooksResponse.data.map((info) => {
//     return {
//       id: info.id,
//       title: info.volumeInfo.title,
//       author: info.volumeInfo.authors,
//       year: info.volumeInfo.publishedDate,
//       thumbnail: info.volumeInfo.imageLinks.thumbnail,
//       language: info.volumeInfo.language,
//       pages: info.volumeInfo.pageCount,
//       content_short: info.searchInfo.textSnippet,
//       publisher: book.volumeInfo.publisher,
//     }
//   })
//   await Book.bulkCreate(apiInfo)
//   return apiInfo

// }

const getBooksDB =  () => {

  return Book.findAll({
    includes: {
      model: Book,
      attributes: ['id','title','author','year','pages','content_short','publisher','language','thumbnail'],
      through: {
        attributes: []
      }
    }
  }) 

}

router.get('/books', async (req, res) => {

  let booksLoad = await getBooksDB()

  booksLoad.length ? 
    res.status(200).send(booksLoad) 
  : 
    res.status(404).send('No existe ese libro')
  
})


router.post('/addBook', async (req, res) => {
  
  const { id, title, author, year, pages, content_short, publisher, language, thumbnail } = req.body
  console.log(title)
  
  try{
    
    let [act, created] = await Book.findOrCreate({
      where: {
        id: id,
        title: title,
        author: author,
        year: year,
        pages: pages,
        content_short: content_short,
        publisher: publisher,
        language: language,
        thumbnail: thumbnail,
      }})
      
      return res.status(200).json(act)
      
    } catch (error) {
      console.log(error)
    }
  })
  


    
                                 
                      
module.exports = router;