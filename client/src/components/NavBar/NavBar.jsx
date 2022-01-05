import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import Logo from '../../assets/logo.png';
import AddBook from '../Form/Form.jsx';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { getBooks, getBookTitle } from '../../actions/index.js';
import './NavBar.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 620,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

function NavBar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { user, isAuthenticated } = useAuth0()
    const [ title, setTitle] = React.useState('')

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getBooks())
    }, [dispatch])

    function handleInputChange(e){
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBookTitle(title))
        console.log(title)
    }

    return (
        <div className="NavBarContainer">

            <div className="NavBarLogo">
                <img className="Logo" src={Logo} alt="Logo"/>
            </div>

            <div className="NavBarMenu">
                <div className={ isAuthenticated ? "MenuItems" : "MenuItems2"} >
                    {
                        isAuthenticated ?
                            <div className="Menu" >
                                <Button className="MenuButton" size="small" disableElevation={true}>E-Books</Button>
                                <Button className="MenuButton" size="small" disableElevation={true} onClick={handleOpen}>Agregar</Button>
                                <Logout />
                                <div className="NavBarUserPicture">
                                    <img src={user.picture} alt={user.name}/>
                                </div>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Box sx={style}>
                                        <AddBook />
                                    </Box>
                                </Modal>
                            </div>
                        :
                            <Login />   
                    }
                </div>

                <div className="Search">
                        <input 
                            type="text" 
                            className="InputSearch" 
                            placeholder={ isAuthenticated ? "Buscar Libro..." : "Logueate para poder buscar"}
                            onChange={ (e) => handleInputChange(e) }
                            disabled = { isAuthenticated ? false : true }
                        />
                        <IconButton aria-label="search" onClick={ (e) => handleSubmit(e) }>
                            <TravelExploreIcon 
                                sx={{
                                    color: 'rgb(241, 84, 11)', 
                                    fontSize:'35px',
                                    transition: '.5s all', 
                                    '&:hover':{
                                        color:'#0eedcc'
                                    }
                                    }}
                            />
                        </IconButton>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
