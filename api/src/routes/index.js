const { Router } = require('express');
// const axios = require('axios')
const router = Router();
//const { Book } = require('../db.js');
const { conn, Book } = require('../db.js');




const getApiInfo = async () => {

  const apiGoogleBooksResponse = await axios.get('https://www.googleapis.com/books/v1/volumes?q=ebook')
  const apiInfo = await apiGoogleBooksResponse.data.map((info) => {
    return {
      id: info.id,
      title: info.volumeInfo.title,
      author: info.volumeInfo.authors,
      year: info.volumeInfo.publishedDate,
      thumbnail: info.volumeInfo.imageLinks.thumbnail,
      language: info.volumeInfo.language,
      pages: info.volumeInfo.pageCount,
      content_short: info.searchInfo.textSnippet,
      publisher: book.volumeInfo.publisher,
    }
  })
  await Book.bulkCreate(apiInfo)
  return apiInfo

}


const getBooksSortedZA = async () => {

  const booksSortedZA = await getApiInfo()
  booksSortedZA.sort((a, b) =>{
    if(a.title > b.title){
      return -1
    }
    if(b.title > a.title  ) {
      return 1
    }
    return 0

  }) 

  return booksSortedZA

}

const getBooksSortedAZ = async () => {

  const booksSortedAZ = await getApiInfo()
  booksSortedAZ.sort((a, b) =>{
    if(a.title > b.title){
      return 1
    }
    if(b.title > a.title  ) {
      return -1
    }
    return 0

  })

  return booksSortedAZ
}

router.get('/books/:type', async (req, res) => {

  const { type } = req.params
  if(type === 'desc'){
    let booksZA = await getBooksSortedZA()
    res.status(200).send(booksZA)
  } else if( type === 'asc'){
    let booksAZ = await getBooksSortedAZ()
    res.status(200).send(booksAZ)
  } else{
    res.status(404).send('opcion inválida')
  }
  
})

router.get('/books', async (req, res) => {

  const title = req.query.name
  //let countries = await getCountriesDBInfo()

  if(title){
    let bookName = await countries.filter(country =>
     country.name.toLowerCase().includes(name.toLowerCase()))

     countryName.length ?
     res.status(200).send(countryName) :
     res.status(404).send('No existe ese libro')
  } else {
    res.status(200).send(countries)
  }
})


router.get('/countries/:id', async (req, res) =>{
  
  const { id } = req.query
  
  Country.findOne({
    where: {
      id: id.toUpperCase()
    }
  })
  .then((country) => {
    
    res.status(200).json  ( country )
  })
  .catch((error) => res.status(404).send(error))
  
})

router.post('/activity', async (req, res) => {
  
  const { name, difficulty, duration, season, countries} = req.body
  
  try{
    
    let [act, created] = await TouristACT.findOrCreate({
      where: {
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
      }})
      
      await act.setCountries(countries)
      return res.status(200).json(act)
      
    } catch (error) {
      console.log(error)
    }
  })
  
router.get('/activities', async (req, res) => {
  
  const { name } = req.query
  const act = await getActivitiesDBInfo(TouristACT)
  
  if(name){

    TouristACT.findOne({
      where: {
        name: name
      }
    })
    .then((act) => {
      res.send( act )
    })
    .catch((error) => res.status(404).send(error))




  } else {
    res.status(200).json(act)
    }
})
    
router.get('/activities/:id', async (req, res) => {
  
  const { id } = req.params;
  try{
    const country = await Country.findByPk(id.toUpperCase())
    const activities = await country.getTouristACTs();
    
    const result = activities.map(t => t.toJSON())
    res.status(200).json(result)
    
  } catch(err){
    console.log(err)
  }
  
})
    
                                 
                      
module.exports = router;