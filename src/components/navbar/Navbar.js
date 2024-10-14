import React, { useState } from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar-items">

            <Link to='/' className='navbar-logo-link'>
                <h1 className="navbar-logo">claire bogdan</h1>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>    
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        about
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                        portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <a className='nav-links' href="https://www.linkedin.com/in/clairebogdan">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-links' href="https://github.com/clairebogdan">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>

        </nav>
        </>
    );
}

export default Navbar;