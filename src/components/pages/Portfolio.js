import React from 'react';
import '../../App.css';
import '../styles/Portfolio.css';
import '../styles/Button.css';
import saxophone from '../../assets/saxophone.jpg';
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


export default function Portfolio() {
    return (
        <>
        <h1 className='portfolio'>PORTFOLIO</h1>
        
        <div className='projects'>
            <h2 className='heading'>PROJECTS</h2>
            <div className="row">
                <div className="column">
                    <h2 className='name'>PerfectFit</h2>
                    <img src={perfectfit} alt='website image' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Instrumentation Calculator</h2>
                    <img src={saxophone} alt='saxophone' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Package Delivery</h2>
                    <img src={mailboxes} alt='multiple mailboxes' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Appointment Manager</h2>
                    <img src={appointments} alt='agenda with appointments' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Inventory Manager</h2>
                    <img src={inventory} alt='inventory warehouse' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Student Roster</h2>
                    <img src={classroom} alt='classroom with students and teacher' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Career Chatbot</h2>
                    <img src={chatbot} alt='image of chatbot' width='100%' height='100%'/>
                </div>
                <div className="column">
                    <h2 className='name'>Hurricane Cleanup</h2>
                    <img src={hurricanerobot} alt='image of robot simulation' width='100%' height='100%'/>
                </div>
            </div>
        </div>


        <div className='projects'>
            <h2 className='heading'>CERTIFICATIONS</h2>
            <div className="row">
                <div className="column-small">
                    <img src={oracle} alt='Oracle Certified Associate' width='100%' height='100%'/>
                </div>
                <div className="column-small">
                    <img src={itil} alt='ITIL Certification' width='100%' height='100%'/>
                </div>
                <div className="column-small">
                    <img src={project} alt='CompTIA Project+ Certification' width='100%' height='100%'/>
                </div>
                <div className="column-small">
                    <img src={ciw} alt='CIW Site Developement Associate Certification' width='100%' height='100%'/>
                </div>
            </div>
        </div>

        <div className="container">
            <a className='btn' href={resume}>Resume</a>
        </div>

        </>
    );
}