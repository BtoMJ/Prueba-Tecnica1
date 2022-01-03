import axios from 'axios';
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK_DETAIL = 'GET_BOOK_DETAIL'
export const GET_BOOK_TITLE = 'GET_BOOK_TITLE'
export const FILTER_BY_AUTHOR = 'FILTER_BY_AUTHOR'
export const FILTER_BY_YEAR = 'FILTER_BY_YEAR'
export const ADD_BOOK = 'ADD_BOOK'
export const GET_BOOKS_SORTED = 'GET_BOOKS_SORTED'


export function getBooks() {
    return function(dispatch) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=book")
        .then(books => {
            dispatch({ 
                type: GET_BOOKS, 
                payload: books.data
            })
        })
    }
  }
  
export function getBookDetail(id) {
    return async function(dispatch) {
        try{
            var json = await axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
            return dispatch({ 
                type: GET_BOOK_DETAIL,
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}

export function getBookTitle (name) {
    return async function (dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/countries?name=" + name)
            return dispatch ({
                type: GET_BOOK_TITLE,
                payload: json.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function filterByAuthor(payload){
    return{
        type: FILTER_BY_AUTHOR,
        payload
    }
}

export function filterByYear(payload){
    return{
        type: FILTER_BY_YEAR,
        payload
    }
}

export function postBook(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/addBook",payload)
        return response
    }
}

export function getBooksSORTEDza() {
    return function(dispatch) {
        return axios.get("http://localhost:3001/books/za")
        .then(booksZA => {
            dispatch({ 
                type: GET_BOOKS_SORTED, 
                payload: booksZA.data
            })
        })
    }
}

export function getBooksSORTEDaz() {
    return function(dispatch) {
        return axios.get("http://localhost:3001/books/az")
        .then(booksAZ => {
            dispatch({ 
                type: GET_BOOKS_SORTED, 
                payload: booksAZ.data
            })
        })
    }
}
