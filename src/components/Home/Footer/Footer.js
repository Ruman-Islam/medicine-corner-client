import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ margin: '0 auto' }} className="d-flex justify-content-center row w-75 mt-5">
            <hr style={{border:'5px solid red'}} />
            <div className="col-md-3">
                <ul>
                    <h6><a href="#">Socials</a></h6>
                    <li><a href="">Linkin</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Google Plus</a></li>
                    <li><a href="">Skype</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <h6><a href="">Company Info</a></h6>
                    <li><a href="">Newsroom</a></li>
                    <li><a href="">Sale your Pharmacy</a></li>
                    <li><a href="">Affiliate Programs</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Investor Relations</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <h6><a href="">Service Info</a></h6>
                    <li><a href="">Shipping</a></li>
                    <li><a href="">Returns</a></li>
                    <li><a href="">Product Recall</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Site Map</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul>
                    <h6><a href="">Plan Member Services</a></h6>
                    <li><a href="">Mail Service</a></li>
                    <li><a href="">Plan Service</a></li>
                    <li><a href="">Delivery</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Site Map</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;