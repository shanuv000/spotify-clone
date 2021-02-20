import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

//Constructor of api use to do all spotify work
const spotify = new SpotifyWebApi();


function App() {
    const [{user, token}, dispatch] = useDataLayerValue();
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            })


            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                console.log('🙆', user);
                dispatch({
                    type: 'SET_USER',
                    user: user,
                })
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlists: playlists
                })
            })
            spotify.getPlaylist('37i9dQZF1DWXVJK4aT7pmk').then(response=>
                dispatch({
                    type:'SET_DISCOVER_WEEKLY',
                    discover_weekly:response,
                })

            )
        }


        console.log("I have a token", token);
    }, []);
    return (
        <div className="app">
            {
                token ? (
                        <Player spotify={spotify}/>
                    ) :
                    (<Login/>)
            }
            {/*Spotify Logo*/}

            {/*Login with Spotify Button*/}

        </div>
    );
}

export default App;
