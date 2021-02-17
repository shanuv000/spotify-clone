import React from 'react';
import './Login.css';
import {loginUrl} from "./spotify";

const Login = () => {
    return (
        <div className='login'>
            {/*Spotify Logo*/}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
                alt=""/>
            {/*Login with spotify button*/}
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}
export default Login;