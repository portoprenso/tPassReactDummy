import React from 'react';
import './OrderForm.css'
import house from '../../assets/store.png'
import { Button } from '@material-ui/core';
import apple from '../../assets/apple.png'
import google from '../../assets/google.png'

const OrderForm = () => {
    return (
        <div className="order_form_container">
            <div className="order_form__block">
                <img src={house} alt="" />
                <h2>Enjoy your afternoon tea with a snack</h2>
                <form action="">
                    <input type="text" placeholder="Enter mobile number"/>
                    <Button variant="contained" color="primary">Send link</Button>
                </form>
                <div className="order_form__block__buttons">
                    <Button variant="contained" color="primary"><img src={apple} alt="" /></Button>
                    <Button variant="contained" color="primary"><img src={google} alt="" /></Button>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;