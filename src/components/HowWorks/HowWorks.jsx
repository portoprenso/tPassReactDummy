import React from 'react';
import './HowWorks.css'
import phone from '../../assets/phone_with-snacks.png'


const HowWorks = () => {
    return (
        <div className="howworks_container">
            <div className="howworks__card">
                <img src={phone} alt="" />
                <div className="howworks__card__description">
                    <p>Your daily pick-me-up</p>
                    <h2>How does it work</h2>
                    <p>Start choosing your favorite teas and snacks in your nearby stores and place your orders, accumulate points, share gifts and teas with your friends and co-workers, and finally use our T-pass yo get your free drinks</p>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;