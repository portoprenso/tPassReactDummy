import React from 'react';
import './Header.css'
import cup_logo from '../../assets/logo_vector.svg'
import { Button } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header_container">
            <div className="header__logo">
                <img src={cup_logo} alt="" />
            </div>
                <ul>
                    <li>Stores</li>
                    <li>Help &#38; Support</li>
                    <li><Button variant="contained" color="primary">Download</Button></li>
                </ul>
        </div>
    );
};

export default Header;