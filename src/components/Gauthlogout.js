import React from 'react';
import { GoogleLogout } from 'react-google-login';


const Gauthlogout = () => {
    const clientId = "748265233836-g52ucus3o0iligk3elva6r26mg918rtr.apps.googleusercontent.com";
    const logout = () => {
        alert('Logout success!!!')
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
                </GoogleLogout>
        </div>
    )
}

export default Gauthlogout
