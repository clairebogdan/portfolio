import React from 'react';
import '../../App.css';
import '../styles/Immuta.css';
import immuta_slim from '../../assets/experience_pics/immuta-slim.png'


function Immuta() {

    return (
        <>
            <body>
                <div className='center'>
                    <img src={immuta_slim} alt='Immuta' width='50%' />
                </div>
                <div className='grid'>
                    <div className='summary-items'>
                        <div className='grid-title'>SUMMARY</div>
                        <br />
                        <div>
                            <p>
                                Fullstack Software Engineer
                                <br /><br />
                                Platform Engineering Team
                                <br /><br />
                                October 2020 - current
                                <br /><br />
                                Remote
                            </p>
                        </div>
                    </div>
                    <div className='technology-items'>
                        <div className='grid-title'>TECHNOLOGIES</div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            Python
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            Angular
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            PostgreSQL
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            HTML, CSS
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            Docker
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            Kubernetes
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            GitHub
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            ArgoCD
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            Jira
                        </div>
                    </div>
                </div>

                <div className='center'>
                    <div className='grid-title'>EXPERIENCE</div>
                </div>
                <div className='exp-box'>
                    <br />
                    * Fullstack web application development: APIs, databases, UI/UX
                    <br /><br />
                    * Develop and maintain an in-house idenity and access management application. This application is
                    an Open ID Connect, SAML, and JWT identity provider. We use it for Single Sign-On (SSO) capabilities
                    with other internal/in-house applications as well as various external applications, such as Salesforce
                    and Teamwork.
                    <br /><br />
                    * Manage SSO integrations across company applications
                    <br /><br />
                    * Occasionally help customers directly over Zoom
                    <br /><br />
                    * Documentation writing (for both internal employees as well as customers)
                    <br /><br />
                    * Familiar with CI/CD pipelines
                    <br /><br />
                    * Very comfortable with working fully remote
                </div>

            </body>

        </>
    );
}
export default Immuta;