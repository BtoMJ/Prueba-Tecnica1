import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../src/components/NavBar/NavBar.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Paginado from './components/Paginado/Paginado.jsx';
import './App.css';

function App() {

  const { user, isAuthenticated } = useAuth0()

  var books = useSelector(state => state.booksSearch)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [booksXPage] = React.useState(10)

  const iLastBook = currentPage * booksXPage
  const iFirstBook = iLastBook - booksXPage

  const currentBooks = books.slice( iFirstBook, iLastBook )

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <div className="AppNavBar">
        <NavBar />
      </div>
      <div className="AppComponents">
        
        <div className="AppBooks">
        {
          currentBooks.length > 0 ?
          currentBooks.map((book, index) => {
            return ( 
              <div className="Book" key={index}>
                  <div className="Portrait">
                    <img  src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                  </div>
                  <div className="Title">{book.volumeInfo.title}</div>
                  <div>
                    <a className="LinkBook" href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">+ info</a>
                  </div>
              </div>
              )
          })
          : 
            <div className="Warning">
              {
                books.length > 0  ? 
                "No existe el libro"
                :
                 <div className="Label">
                   <h1>Bienvenido</h1>
                   <p>
                     Aquí podrás buscar una serie de e-books proporcionados por Google y revisar
                     toda la información de cada uno.<br /><br />
                     {
                       isAuthenticated ? "" :  <h6>Por favor logeate para acceder a la información</h6>
                     }
                    
                   </p>
                 </div>
              }
            </div>
        } 
        </div>
      
        <div className="Paginado">
          <Paginado
            booksXPage = {booksXPage} 
            allbooks = {books.length}
            paginado = {paginado}
          />
        </div>

      </div>

      <div className="AppFooter">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

// {