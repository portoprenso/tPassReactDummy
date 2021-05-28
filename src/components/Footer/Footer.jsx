import React from 'react';
import './Footer.css'
import blueLeaf from '../../assets/leaf.png'
import yellowLeaf from '../../assets/yellow_leaves.png'
import logo from '../../assets/logo_vector_light.svg'

const Footer = () => {
    return (
        <div className="footer_container">
            <img className="blueLeaf" src={blueLeaf} alt="" />
            <div className="footer_info">
                <img className="footer_info__logo" src={logo} alt="" />
                <ul>
                    <li>
                        <h5>Company</h5>
                        <ul>
                            <li>Merchant portal</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Support</h5>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms of service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </li>
                    <li>
                        <h5>Follow us</h5>
                        <ul>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <img className="footer_info__logo-second" src={yellowLeaf} alt="" />
        </div>
    );
};

export default Footer;