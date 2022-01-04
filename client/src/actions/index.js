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
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=book+intitle&maxResults=40")
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

export function getBookTitle (title) {
    let apiKey = 'AIzaSyBOJrSnfKLiNokRDxC06NtF7mFyMLM_VOE'
    return async function (dispatch) {
        try{
            var json = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title +"&maxResults=40&filter=free-ebooks&key=" + apiKey)
            return dispatch ({
                type: GET_BOOK_TITLE,
                payload: json.data.items
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function postBook(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/addBook",payload)
        return response
    }
}


