import { 
    GET_BOOKS,
    GET_BOOK_DETAIL, 
    GET_BOOK_TITLE,
    FILTER_BY_AUTHOR,
    FILTER_BY_YEAR,
    ADD_BOOK, 
    GET_BOOKS_SORTED
 } from '../actions/index.js';


const initialState = {
    books: [],
    newBook: [],
    bookDetail: [],
    booksSORTED: []
  };

function rootReducer(state = initialState, action) {    
    switch (action.type) {

        case GET_BOOKS:{
            return{
                ...state,
                books: action.payload,
                booksSORTED: action.payload
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
                booksSORTED: action.payload
            }
        }

        case GET_BOOKS_SORTED:{
            return{
                ...state,
                booksSORTED: action.payload
            }
        }

        case FILTER_BY_AUTHOR:{
            return{
                ...state,
                booksSORTED: action.payload
            }
        }

        case FILTER_BY_YEAR:{
            const allActi = state.allActivities
            const activityFiltered = allActi.filter(ele => ele.name === action.payload)
            return{
                ...state,
                activity: activityFiltered
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