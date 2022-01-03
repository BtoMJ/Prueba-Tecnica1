import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Login/Login.jsx';
import Logout from '../Logout/Logout.jsx';
import Logo from '../../assets/logo.png';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './NavBar.css';

function NavBar() {

    const { user, isAuthenticated } = useAuth0()

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
                                <Button className="MenuButton" size="small" disableElevation="true">E-Books</Button>
                                <Button className="MenuButton" size="small" disableElevation="true">A - Z</Button>
                                <Button className="MenuButton" size="small" disableElevation="true">Z - A</Button>
                                <Button className="MenuButton" size="small" disableElevation="true">Agregar</Button>
                                <Logout />
                                <div className="NavBarUserPicture">
                                    <img src={user.picture} alt={user.name}/>
                                </div>
                            </div>
                        :
                            <Login />   
                    }
                </div>

                <div className="Search">
                    <form>
                        <input type="text" className="InputSearch" placeholder="Buscar Libro..."/>
                        <IconButton aria-label="search">
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
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
