import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {refreshTokenSetup} from '../utils/refreshToken';


const Gauth = (props) => {
    const clientId = "748265233836-g52ucus3o0iligk3elva6r26mg918rtr.apps.googleusercontent.com";
    const onSuccess = (response)=> {
        console.log("[Login Success] currentUser:", response);
        props.userResponse(response.profileObj)
        refreshTokenSetup(response);
    }
    const onFailure = (response) => {
        console.log("[Login Failure]", response);
    }
    return (
        <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                style={{marginTop: '100px'}}
            />

        </div>
    )
}

export default Gauth
