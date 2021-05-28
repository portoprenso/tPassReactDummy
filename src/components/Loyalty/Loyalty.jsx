import React from 'react';
import './Loyalty.css'
import woman from '../../assets/woman_excited.png'
import medalItem from '../../assets/square_icon_medal.png'
import percentItem from '../../assets/square_icon_percent.png'
import ticketItem from '../../assets/square_icon_ticket.png'

const Loyalty = () => {
    return (
        <div className="loyalty_container">
            <div className="loyalty__card">
                <div className="loyalty__card__container">
                    <div className="loyalty__card__items_list">
                        <div className="loyalty__card__items_list__item">
                            <img src={medalItem} alt="" />
                            <div>
                                <h2>Loyalty Points</h2>
                                <p>Collect points on each store and redeem them to change for Teas.</p>
                            </div>
                        </div>
                        <div className="loyalty__card__items_list__item__second">
                            <img src={percentItem} alt="" />
                            <div>
                                <h2>Exclusive Store Discounts</h2>
                                <p>You can enjoy lots of discounts from the selected stores near you.</p>
                            </div>
                        </div>
                        <div className="loyalty__card__items_list__item">
                            <img src={ticketItem} alt="" />
                            <div>
                                <h2>T.Pass Free Drinks</h2>
                                <p>2 Teas for $5.99 each month. and you can carry them over to the next month.</p>
                            </div>
                        </div>
                    </div>
                    <img className="woman-pic" src={woman} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Loyalty;