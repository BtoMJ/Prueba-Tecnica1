import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0()

    if(isLoading) return <div>Cargando...</div>

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}

export default Profile
