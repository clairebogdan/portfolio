import React from 'react';
import '../../App.css';
import '../styles/Portfolio.css';
import '../styles/Button.css';
import saxophone from '../../assets/saxophone.jpg';
import reeds from '../../assets/reeds.jpg';
import numbers from '../../assets/numbers.jpg';
import appointments from '../../assets/appointments.jpg';
import mailboxes from '../../assets/mailboxes.jpg';
import inventory from '../../assets/inventory.jpg';
import classroom from '../../assets/classroom.jpg';
import chatbot from '../../assets/chatbot.png';
import hurricanerobot from '../../assets/hurricanerobot.png';
import perfectfit from '../../assets/perfectfit.png';
import itil from '../../assets/itil.png';
import oracle from '../../assets/oracle.jpg';
import project from '../../assets/project.png';
import ciw from '../../assets/ciw.gif';
import resume from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <>

            <div className='project-title'><h2>PROJECTS</h2></div>
            
            <nav className='mini-nav'>
                <button className='nav-btn is-active' active-color='orange'>All</button>
                <button className='nav-btn' active-color='green'>Java</button>
                <button className='nav-btn' active-color='blue'>Python</button>
                <button className='nav-btn' active-color='red'>Other</button>
                <span className='nav-indicator'></span>            
            </nav>

            
            <div className="row">
                
            <Link to='/perfectfit'>
                <div className="column">
                        <h2 className='name'>PerfectFit</h2>
                        <img src={perfectfit} alt='website image' width='100%' height='100%'/>
                </div>
            </Link>

                
            <Link to='/instrumentcalc'>
                <div className="column">
                    <h2 className='name'>Instrumentation Calculator</h2>
                    <img src={saxophone} alt='saxophone' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/bogdanreeds'>
            <div className="column">
                <h2 className='name'>Bogdan Reeds Ordering</h2>
                <img src={reeds} alt='oboe reed and thread' width='100%' height='100%'/>
            </div>
            </Link>

            <Link to='/packagedelivery'>
                <div className="column">
                    <h2 className='name'>Package Delivery</h2>
                    <img src={mailboxes} alt='multiple mailboxes' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/appointmentmanager'>
                <div className="column">
                    <h2 className='name'>Appointment Manager</h2>
                    <img src={appointments} alt='agenda with appointments' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/inventorymanager'>
                <div className="column">
                    <h2 className='name'>Inventory Manager</h2>
                    <img src={inventory} alt='inventory warehouse' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/primenumber'>
                <div className="column">
                    <h2 className='name'>Prime Number Generator</h2>
                    <img src={numbers} alt='prime numbers' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/roster'>
                <div className="column">
                    <h2 className='name'>Student Roster</h2>
                    <img src={classroom} alt='classroom with students and teacher' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/chatbot'>
                <div className="column">
                    <h2 className='name'>Career Chatbot</h2>
                    <img src={chatbot} alt='image of chatbot' width='100%' height='100%'/>
                </div>
            </Link>

            <Link to='/hurricane'>
                <div className="column">
                    <h2 className='name'>Hurricane Cleanup</h2>
                    <img src={hurricanerobot} alt='image of robot simulation' width='100%' height='100%'/>
                </div>
            </Link>
        </div>

        

        <div className='certifications'>
            <div className='cert-box'><h4 className='cert-title'>CERTIFICATIONS</h4></div>
            <div className="cert-grid">
                <div className="column-small">
                    <img className="cert" src={oracle} alt='Oracle Certified Associate' width='120' height='120'/>
                </div>
                <div className="column-small">
                    <img className="cert-itil" src={itil} alt='ITIL Certification' width='200' height='100'/>
                </div>
                <div className="column-small">
                    <img className="cert" src={project} alt='CompTIA Project+ Certification' width='120' height='120'/>
                </div>
                <div className="column-small">
                    <img className="cert" src={ciw} alt='CIW Site Developement Associate Certification' width='120' height='120'/>
                </div>
            </div>
        </div>

        <div className="container">
            <a className='btn' href={resume}>Resume</a>
        </div>

      

        </>
    );
}
export default Portfolio;