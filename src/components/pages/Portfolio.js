import React from 'react';
import '../../App.css';
import '../styles/Portfolio.css';
import '../styles/Button.css';
import website from '../../assets/project_pics/website/website-img.jpg'
import map from '../../assets/project_pics/maryland/map.jpg'
import saxophone from '../../assets/saxophone.jpg';
import reeds from '../../assets/reeds.jpg';
import bogdanreeds from '../../assets/project_pics/bogdanreeds/bogdanreeds.jpg';
import numbers from '../../assets/numbers.jpg';
import appointments from '../../assets/appointments.png';
import delivery from '../../assets/delivery.png';
import inventory from '../../assets/inventory.png';
import roster from '../../assets/roster.png';
import chatbot from '../../assets/chatbot.png';
import hurricane from '../../assets/hurricane.png';
import perfectfit from '../../assets/perfectfit.png';
import itil from '../../assets/itil.png';
import oracle from '../../assets/oracle.jpg';
import project from '../../assets/project.png';
import ciw from '../../assets/ciw.gif';
import resume from '../../assets/resume.pdf';
import immuta from '../../assets/experience_pics/immuta.jpg'
import previous_career from '../../assets/experience_pics/previous-career.png'
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <>
            <div className='project-title'><h2>EXPERIENCE</h2></div>

            <div className="experience-grid">
                <Link to='/immuta'>
                    <div className="experience-item">
                        <img src={immuta} alt='Immuta' width='50%' />
                    </div>
                </Link>
            </div>

            <div className="experience-grid">
                <Link to='/previous-career'>
                    <div className="experience-item">
                        <img src={previous_career} alt='Previous career' width='50%' />
                    </div>
                </Link>
            </div>

            <div className='project-title'><h2>PERSONAL PROJECTS</h2></div>

            <div className="project-grid">

                <Link to='/perfectfit'>
                    <div className="project-item">
                        <h2 className='name'>PerfectFit</h2>
                        <img src={perfectfit} alt='website' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/instrumentcalc'>
                    <div className="project-item">
                        <h2 className='name'>Instrumentation Calculator</h2>
                        <img src={saxophone} alt='saxophone' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/bogdanreeds-web'>
                    <div className="project-item">
                        <h2 className='name'>bogdanreeds.com</h2>
                        <img src={bogdanreeds} alt='oboe reed and thread' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/bogdanreeds'>
                    <div className="project-item">
                        <h2 className='name'>Oboe Reed Ordering</h2>
                        <img src={reeds} alt='oboe reed and thread' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/packagedelivery'>
                    <div className="project-item">
                        <h2 className='name'>Package Delivery</h2>
                        <img src={delivery} alt='multiple mailboxes' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/appointmentmanager'>
                    <div className="project-item">
                        <h2 className='name'>Appointment Manager</h2>
                        <img src={appointments} alt='agenda with appointments' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/inventorymanager'>
                    <div className="project-item">
                        <h2 className='name'>Inventory Manager</h2>
                        <img src={inventory} alt='inventory warehouse' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/primenumber'>
                    <div className="project-item">
                        <h2 className='name'>Prime Number Generator</h2>
                        <img src={numbers} alt='prime numbers' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/roster'>
                    <div className="project-item">
                        <h2 className='name'>Student Roster</h2>
                        <img src={roster} alt='classroom with students and teacher' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/chatbot'>
                    <div className="project-item">
                        <h2 className='name'>Career Chatbot</h2>
                        <img src={chatbot} alt='chatbot' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/hurricane'>
                    <div className="project-item">
                        <h2 className='name'>Hurricane Cleanup</h2>
                        <img src={hurricane} alt='robot simulation' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/website-project'>
                    <div className="project-item">
                        <h2 className='name'>clairebogdan.com</h2>
                        <img src={website} alt='website' width='100%' height='100%' />
                    </div>
                </Link>

                <Link to='/maryland'>
                    <div className="project-item">
                        <h2 className='name'>Maryland Spending Data</h2>
                        <img src={map} alt='map of USA' width='100%' height='100%' />
                    </div>
                </Link>

            </div>

            <div className='certifications'>

                <div className='cert-box'>
                    <h4 className='cert-title'>CERTIFICATIONS</h4>
                </div>

                <div className="cert-grid">

                    <div className="column-small">
                        <img className="cert" src={oracle} alt='Oracle Certified Associate' width='120' height='120' />
                    </div>

                    <div className="column-small">
                        <img className="cert-itil" src={itil} alt='ITIL Certification' width='200' height='100' />
                    </div>

                    <div className="column-small">
                        <img className="cert" src={project} alt='CompTIA Project+ Certification' width='120' height='120' />
                    </div>

                    <div className="column-small">
                        <img className="cert" src={ciw} alt='CIW Site Developement Associate Certification' width='120' height='120' />
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