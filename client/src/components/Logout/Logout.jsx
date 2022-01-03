import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './Logout.css';

function Logout() {

    const { logout } = useAuth0()

    return (
        <Button 
            className="MenuButton" 
            size="small" 
            disableElevation="true"
            onClick={ () => logout( {returnTo: window.location.origin} ) } 
            endIcon={ <LogoutIcon  /> }
            >Logout
        </Button>
    )
}

export default Logout
