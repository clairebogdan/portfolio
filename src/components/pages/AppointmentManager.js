import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import AMmain from '../../assets/project_pics/appointment/AMmain.png'
import AMaddA from '../../assets/project_pics/appointment/AMaddA.png'
import AMmodA from '../../assets/project_pics/appointment/AMmodA.png'
import AMaddC from '../../assets/project_pics/appointment/AMaddC.png'
import AMmodC from '../../assets/project_pics/appointment/AMmodC.png'
import AMreports from '../../assets/project_pics/appointment/AMreports.png'
import AMlogin from '../../assets/project_pics/appointment/AMlogin.png'

function AppointmentManager() {

    return (
        <>
        <body>
            <div className='project-top'>
                <h1>Appointment Manager</h1>
                <h2>GUI Application</h2>
            </div>

            <div className='project-img'>
                <img src={AMmain} width='100%' height='100%'/>
            </div>

            <div className='img-grid'>
                <div className='img-grid-item'>
                    <img src={AMaddC} width='100%' height='100%'/>
                </div>

                <div className='img-grid-item'>
                    <img src={AMmodC} width='100%' height='100%'/>
                </div>
            </div>

            <div className='img-grid'>
                <div className='img-grid-item'>
                    <img src={AMaddA} width='100%' height='100%'/>
                </div>

                <div className='img-grid-item'>
                    <img src={AMmodA} width='100%' height='100%'/>
                </div>
            </div>

            <div className='img-grid'>
                <div className='img-grid-item'>
                    <img src={AMlogin} width='100%' height='100%'/>
                </div>

                <div className='img-grid-item'>
                    <img src={AMreports} width='100%' height='100%'/>
                </div>
            </div>

            <div className='description-box'>
                <h1><center>Description:</center></h1>
                <p>this is where the description will go</p>
            </div>

            <div className='tools-links'>
                
                <div className='tools'>
                    <h1><center>Tools:</center></h1>
                    <span className='tool-language'>Java</span>
                    <span className='tool-language'>HTML</span>
                    <span className='tool-framework'>JavaFX</span>
                    <span className='tool-database'>MySQL</span>
                    <span className='tool-ide'>NetBeans</span>
                    <span className='tool-ide'>SceneBuilder</span>
                </div>

                <div className='link-grid'>
                    <h1><center>Links:</center></h1>
                    <a className='btn-sm' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
                    <a className='btn-sm' href="https://drive.google.com/file/d/1gQlAtX8Cn2mVTpVP_KY5dF_aOzgfEdoX/view?usp=sharing">Documentation</a>
                </div>
            </div>

            <ProjectNav/>

        </body>


        </>
        );
    }
export default AppointmentManager;