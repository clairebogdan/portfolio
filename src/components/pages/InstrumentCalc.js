import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'

function InstrumentCalc() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Beginning Band Instrumentation Calculator</h1>
            <h2>Web Application</h2>
        </div>

        <div className='project-img'>
            image goes here
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>


        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Python</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-framework'>Flask</span>
                <span className='tool-framework'>Bootstrap</span>
                <span className='tool-deploy'>Heroku</span>
            </div>


            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a href="https://beginner-band.herokuapp.com" className='btn'>Webpage</a>
                <a href="https://github.com/clairebogdan/Beginner_Instrumentation_Calculator"className='btn'>GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default InstrumentCalc;