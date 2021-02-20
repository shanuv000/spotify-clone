import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    src="https://cms-assets.tutsplus.com/uploads/users/1990/posts/33313/image/electro-beats-album-cover-design-template-469c.jpg"
                    alt="album-cover" className='footer_albumLogo'/>
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon className='footer__icon' fontSize='large'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green'/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Footer;