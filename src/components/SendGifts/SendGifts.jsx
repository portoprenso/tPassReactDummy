import React from 'react';
import './SendGifts.css'
import phone from '../../assets/phone_blueberry.png'


const SendGifts = () => {
    return (
        <div className="send_gifts_container">
            <div className="send_gifts__card">
                <div className="send_gifts__card__description">
                    <p>Please your friends</p>
                    <h2>Send gifts and <br/>order for groups</h2>
                    <p>Send Gifts with a value for your friends and family and use it on their favorite stores. Be the rock star make Group Orders and pick up for your coworkers when they can't get away.</p>
                </div>
                <img src={phone} alt="" />
            </div>
        </div>
    );
};

export default SendGifts;