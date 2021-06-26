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
import oracle from '../../assets/certifications/oracle.png';
import ciw_cert from '../../assets/certifications/ciw-cert.png';
import comptia from '../../assets/certifications/comptia.png';
import itil from '../../assets/certifications/itil.png';
import resume from '../../assets/resume.pdf';
import immuta_slim from '../../assets/experience_pics/immuta-slim.png'
import previous_career from '../../assets/experience_pics/previous-career.png'
import { Link } from 'react-router-dom';

function Portfolio() {

    return (
        <>
            <div className="portfolio-background">
                <div className='project-title'>EXPERIENCE</div>

                <div className="experience-grid">
                    <Link to='/immuta'>
                        <div className="experience-item">
                            <img src={immuta_slim} alt='Immuta' width='50%' />
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

                <div className='project-title'>PROJECTS</div>

                <div className="project-grid">

                    <Link to='/perfectfit' className="project-item">
                        <div>
                            <h2 className='name'>PerfectFit</h2>
                            <img src={perfectfit} alt='website' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/instrumentcalc' className="project-item">
                        <div>
                            <h2 className='name'>Instrumentation Calculator</h2>
                            <img src={saxophone} alt='saxophone' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/bogdanreeds-web' className="project-item">
                        <div>
                            <h2 className='name'>bogdanreeds.com</h2>
                            <img src={bogdanreeds} alt='oboe reed and thread' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/bogdanreeds' className="project-item">
                        <div>
                            <h2 className='name'>Oboe Reed Ordering</h2>
                            <img src={reeds} alt='oboe reed and thread' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/packagedelivery' className="project-item">
                        <div>
                            <h2 className='name'>Package Delivery</h2>
                            <img src={delivery} alt='multiple mailboxes' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/appointmentmanager' className="project-item">
                        <div>
                            <h2 className='name'>Appointment Manager</h2>
                            <img src={appointments} alt='agenda with appointments' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/inventorymanager' className="project-item">
                        <div>
                            <h2 className='name'>Inventory Manager</h2>
                            <img src={inventory} alt='inventory warehouse' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/primenumber' className="project-item">
                        <div>
                            <h2 className='name'>Prime Number Generator</h2>
                            <img src={numbers} alt='prime numbers' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/roster' className="project-item">
                        <div>
                            <h2 className='name'>Student Roster</h2>
                            <img src={roster} alt='classroom with students and teacher' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/chatbot' className="project-item">
                        <div>
                            <h2 className='name'>Career Chatbot</h2>
                            <img src={chatbot} alt='chatbot' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/hurricane' className="project-item">
                        <div>
                            <h2 className='name'>Hurricane Cleanup</h2>
                            <img src={hurricane} alt='robot simulation' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/website-project' className="project-item">
                        <div>
                            <h2 className='name'>clairebogdan.com</h2>
                            <img src={website} alt='website' width='100%' height='100%' />
                        </div>
                    </Link>

                    <Link to='/maryland' className="project-item">
                        <div>
                            <h2 className='name'>Maryland Spending Data</h2>
                            <img src={map} alt='map of USA' width='100%' height='100%' />
                        </div>
                    </Link>
                </div>

                <div>
                    <div className='project-title'>CERTIFICATIONS</div>
                    <div className="certifications-grid">
                        <div className='cert'>
                            <img src={oracle} alt='Oracle certification' width='60%' height='60%' />
                        </div>
                        <div className='cert'>
                            <img src={ciw_cert} alt='CIW certification' width='100%' height='100%' />
                        </div>
                        <div className='cert'>
                            <img src={comptia} alt='Project+ certification' width='60%' height='60%' />
                        </div>
                        <div className='cert'>
                            <img src={itil} alt='ITIL certification' width='80%' height='80%' />
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <a className='btn' href={resume}>Resume</a>
                </div>
            </div>
        </>
    );
}
export default Portfolio;