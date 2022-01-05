import axios from 'axios';
import React, { useState } from 'react';
import { VscTriangleLeft } from 'react-icons/vsc';
import { useSelector } from 'react-redux';

import './Form.css';


function validate(formData){

    let errors = {}

    if(!formData.id){
        errors.id = "Se requiere un ID"
    } else if(!formData.title){
        errors.title = "Se requiere un Título"
    } else if(!formData.author){
        errors.author = "Se requiere un Autor"
    } else if(!formData.year){
        errors.year = "Se requiere un Año"
    } else if(!formData.pages){
        errors.pages = "Agrega cantidad de páginas"
    } else if(!formData.content_short){
        errors.content_short = "Agrega una descripción"
    } else if(!formData.publisher){
        errors.publisher = "Agrega una Editorial"
    } else if(!formData.language){
        errors.language = "Agrega un idioma"
    } else if(!formData.thumbnail){
        errors.thumbnail = "Agrega una imagen"
    } 
    return errors
}

function AddBook() {

var books = useSelector(state => state.booksSearch)

const [formData, setFormData] = useState({
    id: "",
    title: "", 
    author: "", 
    year: "",
    pages: "",
    content_short: "",
    publisher: "",
    language: "",
    thumbnail: ""
})

const [errors, setErrors] = React.useState({})

function handleChange(e) {
    setFormData((prevState) => {
        return{
            ...prevState,
            [e.target.name] : e.target.value
        }
    })
    setErrors(validate({
        ...formData,
        [e.target.name] : e.target.value
    }))
}

async function handleSubmit(e) {
    e.preventDefault();
    if(formData.title && formData.title && formData.author && formData.year && formData.pages && formData.content_short && formData.publisher && formData.language && formData.thumbnail ){
        console.log(formData)
        await axios.post('http://localhost:3001/addBook', formData ).then(console.log("Hecho !!")).catch(console.error)
        alert('Libro agregado correctamente')  
        setFormData({
            id: "",
            title: "", 
            author: "", 
            year: "",
            pages: "",
            content_short: "",
            publisher: "",
            language: "",
            thumbnail: ""
        }) 
    } 
 }

  return (
    <div className="ContainerForm">
       
        <h1>Agregar Libro</h1>
        <div className="Form">
            <form onSubmit={handleSubmit} id="Formulario">
              
                <label htmlFor='id' className="Etiqueta">Id</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='id' 
                    id='id'  
                    value={formData.id} 
                    onChange={e => handleChange(e)} 
                    maxLength ="12"/>
                    {
                        errors.id && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.id}</label>
                            </div>  
                        )
                    }

                <label htmlFor='title' className="Etiqueta">Title</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='title' 
                    id='title'  
                    value={formData.title} 
                    onChange={e => handleChange(e)} 
                    maxLength ="35"/>
                    {
                        errors.title && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.title}</label>
                            </div>  
                        )
                    }

                <label htmlFor='author' className="Etiqueta">Author</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='author' 
                    id='author'  
                    value={formData.author} 
                    onChange={e => handleChange(e)} 
                    maxLength ="35"/>
                    {
                        errors.author && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.author}</label>
                            </div>  
                        )
                    }

                <label htmlFor='year' className="Etiqueta">Year</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='year' 
                    id='year'  
                    value={formData.year} 
                    onChange={e => handleChange(e)} 
                    maxLength ="4"/>
                    {
                        errors.year && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.year}</label>
                            </div>  
                        )
                    }

                <label htmlFor='pages' className="Etiqueta">Pages</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='pages' 
                    id='pages'  
                    value={formData.pages} 
                    onChange={e => handleChange(e)} 
                    maxLength ="4"/>
                    {
                        errors.pages && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.pages}</label>
                            </div>  
                        )
                    }

                <label htmlFor='content_short' className="Etiqueta">Description</label>
                <textarea 
                    className="Input" 
                    name='content_short' 
                    id='content_short'  
                    value={formData.content_short} 
                    onChange={e => handleChange(e)} 
                />
                    {
                        errors.content_short && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.content_short}</label>
                            </div>  
                        )
                    }

                <label htmlFor='publisher' className="Etiqueta">Editorial</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='publisher' 
                    id='publisher'  
                    value={formData.publisher} 
                    onChange={e => handleChange(e)} 
                    maxLength ="20"/>
                    {
                        errors.publisher && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.publisher}</label>
                            </div>  
                        )
                    }

                <label htmlFor='language' className="Etiqueta">Language</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='language' 
                    id='language'  
                    value={formData.language} 
                    onChange={e => handleChange(e)} 
                    maxLength ="20"/>
                    {
                        errors.language && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.language}</label>
                            </div>  
                        )
                    }

                <label htmlFor='thumbnail' className="Etiqueta">Thumbnail</label>
                <input 
                    className="Input" 
                    type='text' 
                    name='thumbnail' 
                    id='thumbnail'  
                    value={formData.thumbnail} 
                    onChange={e => handleChange(e)} 
                    maxLength ="20"/>
                    {
                        errors.thumbnail && (
                            <div className="ErrorContainer">
                                <VscTriangleLeft className="ArrowLeft1" />
                                <label className="ErrorLabel">{errors.thumbnail}</label>
                            </div>  
                        )
                    }
                
                <div className="BotonContainer">
                    <button type='submit' className="BtnSub" id="submit">Agregar</button>
                </div>
                
            </form>
        </div>
    </div>
  );
};

export default AddBook;