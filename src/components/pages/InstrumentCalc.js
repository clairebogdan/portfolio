import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function InstrumentCalc() {

    return (
        <>
        <div className='project-top'>
            <h1>Beginning Band Instrumentation Calculator - Web Application</h1>
            <h2>Python, Flask, Heroku</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a href="https://beginner-band.herokuapp.com" className='btn'>Webpage Link</a>
            <a href="https://github.com/clairebogdan/Beginner_Instrumentation_Calculator"className='btn'>GitHub Repo</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default InstrumentCalc;