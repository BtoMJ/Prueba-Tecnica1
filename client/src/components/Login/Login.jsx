import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import './Login.css';

function Login() {

    const { loginWithRedirect } = useAuth0()

    return (
        <div className="LoginContainer">
            <Button 
                className="LoginButton" 
                size="small" 
                disableElevation="true"
                onClick={ () => loginWithRedirect() } 
                endIcon={ <FaceIcon  /> }
                >Login
            </Button>
        </div>
    )
}

export default Login
