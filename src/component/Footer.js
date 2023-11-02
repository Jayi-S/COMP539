// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Contact Us</h3>
                <p>Phone: (123) 456-7890</p>
                <p>Email: contact@example.com</p>
            </div>
            <div className="address">
                <h3>Company Address</h3>
                <p>123 Main Street</p>
                <p>City, State, Zip Code</p>
            </div>
        </footer>
    );
}

export default Footer;
