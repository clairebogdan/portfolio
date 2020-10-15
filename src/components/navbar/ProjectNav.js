import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/ProjectNav.css'


function ProjectNav() {

    return (
        <>
        <nav className='project-nav'>
            
            <Link to="/perfectfit" className='project-nav-link'>
                PerfectFit
            </Link>

            <Link to="/instrumentcalc" className='project-nav-link'>
                Instrument Calc
            </Link>

            <Link to="/bogdanreeds" className='project-nav-link'>
                bogdanreeds.com
            </Link>

            <Link to="/bogdanreeds" className='project-nav-link'>
                Reed Order
            </Link>

            <Link to="/packagedelivery" className='project-nav-link'>
                Package Delivery
            </Link>

            <Link to="/appointmentmanager" className='project-nav-link'>
                Appt Manager
            </Link>

            <Link to="/inventorymanager" className='project-nav-link'>
                Inv Manager
            </Link>

            <Link to="/primenumber" className='project-nav-link'>
                Prime Number
            </Link>

            <Link to="/roster" className='project-nav-link'>
                Roster
            </Link>

            <Link to="/chatbot" className='project-nav-link'>
                Chatbot
            </Link>

            <Link to="/hurricane" className='project-nav-link'>
                Hurricane Robot
            </Link>

            <Link to="/website-project" className='project-nav-link'>
                clairebogdan.com
            </Link>

            <Link to="/maryland" className='project-nav-link'>
                Maryland Data
            </Link>

        </nav>
        </>
    );
}
export default ProjectNav;