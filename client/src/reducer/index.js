import { 
    GET_BOOKS,
    GET_BOOK_DETAIL, 
    GET_BOOK_TITLE,
    FILTER_BY_AUTHOR,
    FILTER_BY_YEAR,
    ADD_BOOK, 
 } from '../actions/index.js';


const initialState = {
    books: [],
    booksSearch: [],
    newBook: [],
    bookDetail: [],
    booksBD: []
  };

function rootReducer(state = initialState, action) {    
    switch (action.type) {

        case GET_BOOKS:{
            return{
                ...state,
                booksBD: action.payload
            }
        }

        case GET_BOOK_DETAIL:{
            return{
                ...state,
                bookDetail: action.payload
            }
        }

        case GET_BOOK_TITLE:{
            return{
                ...state,
                booksSearch: action.payload
            }
        }

        case ADD_BOOK:{
            return{
                ...state,
                newBook: action.payload
            }
        }
       
        default:
            return state
            
        }
    };
    
    export default rootReducer;