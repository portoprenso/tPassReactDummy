import React from 'react';
import './Bonuses.css'
import arrowCircle from '../../assets/round_icon_arrow.png'
import percentCircle from '../../assets/round_icon_percent.png'
import cupCircle from '../../assets/round_icon_cup.png'


const Bonuses = () => {
    return (
        <div className="bonuses_container">
            <div className="bonuses__item">
                <ul>
                    <li><img src={arrowCircle} alt="" /></li>
                    <li><h2>Order ahead, skip the line</h2></li>
                    <li><p>Feel like a rock star when you bypass the line and save a bunch of time.</p></li>
                </ul>
            </div>
            <div className="bonuses__item">
                <ul>
                    <li><img src={percentCircle} alt="" /></li>
                    <li><h2>Bonus and discounts</h2></li>
                    <li><p>You can enjoy lots of discounts from the selected stores, or accumulate points.</p></li>
                </ul>
            </div>
            <div className="bonuses__item">
                <ul>
                    <li><img src={cupCircle} alt="" /></li>
                    <li><h2>Share with your friends</h2></li>
                    <li><p>Send gifts to your friends and family, and pick up for your coworkers when they can't get away .</p></li>
                </ul>
            </div>
        </div>
    );
};

export default Bonuses;