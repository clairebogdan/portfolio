import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function AppointmentManager() {

    return (
        <>
        <div className='project-top'>
            <h1>AppointmentManager - GUI Application</h1>
            <h2>Java, JavaFX</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
            <a className='btn' href="https://drive.google.com/file/d/1gQlAtX8Cn2mVTpVP_KY5dF_aOzgfEdoX/view?usp=sharing">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default AppointmentManager;