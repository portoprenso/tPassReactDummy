import React from 'react';
import Header from '../Header/Header';
import './Banner.css'
import arrowsvg from '../../assets/arrow.svg'
import couple from '../../assets/couple_photo.png'
import { Button } from '@material-ui/core';


const Banner = () => {
    return (
        <div className="banner_container">
            <Header />
            <div className="banner__window">
                <h2>Order ahead</h2>
                <h3>and earn rewards for <br/>every purchase</h3>
                <Button variant="contained" color="primary">Discover now <img src={arrowsvg} alt="" /></Button>
                <div className="frame_for_couple">
                    <img className="couple_photo" src={couple}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;