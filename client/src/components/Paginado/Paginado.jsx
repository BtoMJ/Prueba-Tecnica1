import React from 'react';
import './Paginado.css'

function Paginado({ booksXPage, allbooks, paginado }){
    const pagesNumbers = []
    for(let i=1; i <= Math.ceil(allbooks / booksXPage); i++){
        pagesNumbers.push(i)
    }
    return(
        <div className="PagesContainer">
            {
                pagesNumbers && pagesNumbers.map(number => (
                    <button className="PageNumber" onClick={() => paginado(number)} key={number}>{number}</button>
                ))
            }
        </div>
    )
}

export default Paginado;
