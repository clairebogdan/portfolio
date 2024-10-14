import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

import '../styles/Immuta.css';
import immuta_slim from '../../assets/experience_pics/immuta-slim.png'


function Immuta() {

    return (
        <>
            <body>
            <div className='experience-top'>
                <div>
                    <Link to='/portfolio' className="pointer">
                        <i class="fas fa-chevron-left"></i>
                    </Link>
                </div>
            </div>
                <div className='center'>
                    <img src={immuta_slim} alt='Immuta' width='50%' />
                </div>
                <div className='grid'>
                    <div className='summary-items'>
                        <div className='grid-title'>SUMMARY</div>
                        <br />
                        <div>
                            <p>
                                Software Engineer II
                                <br /><br />
                                October 2020 - current
                                <br /><br />
                                Summerville, SC (Remote)
                                <br/><br/>
                                Promoted from level I to II in March 2023
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
                            <span class="dot-exp"></span>
                            Typescript
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
                            <span class="dot-exp"></span>
                            HTML, CSS
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            Python
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
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
                            <span class="dot-exp"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            Datadog
                        </div>
                        <div className='dot-container'>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
                            <span class="dot-exp"></span>
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
                    * Full-stack web application development
                    <br /><br />
                    * PROJECT: Enhanced Onboarding. The goal of this project was to create a new data onboarding paradigm for our customers. It included significant 
                    improvements to our metadata ingestion, internal organization of assets, and a simplified user experience. I served as an administrative lead for this project where I worked closely with Product Managers and the UX/design team. Was responsible
                    for forecasting, writing tickets, and keeping the project on track. Updated stakeholders on a weekly basis with our progress. I also contributed to this project, writing new
                    APIs, database migrations, core business logic, and the frontend.
                    <br /><br />
                    * PROJECT: Audit Service. This was a microservice project that was responsible for logging user activity while using our main product. Used technologies
                    such as GraphQL and Elasticsearch. 
                    <br /><br />
                    * PROJECT: Internal Identity Manager. Developed and maintained an in-house idenity and access management application. This application was
                    an Open ID Connect, SAML, and JWT identity provider. It was used it for Single Sign-On (SSO) capabilities
                    with both internal and external applications.
                    <br /><br />
                    * Produced demos of new features for internal use.
                    <br /><br />
                    * Served on an on-call rotation where I monitored Datadog and helped triage customer issues.
                    <br /><br />
                    * Wrote documentation for customers and internal employees.
                    <br /><br />
                    * Familiar with CI/CD pipelines (Jenkins, GitHub Actions, ArgoCD).
                    <br /><br />
                    * Fully remote with occasional onsites.
                    <br /><br />
                </div>

            </body>

        </>
    );
}
export default Immuta;