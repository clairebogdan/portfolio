import React from 'react';
import './styles/Footer.css'

function Footer() {

    return (
        <>
            <div className='footer'>
                <h4 className='footerText'>Claire Bogdan {new Date().getFullYear()} <i className="far fa-copyright"></i></h4>
            </div>
        </>
    );
}

export default Footer;