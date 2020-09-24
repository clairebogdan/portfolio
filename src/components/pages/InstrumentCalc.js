import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css';
import ICmain from '../../assets/project_pics/instrumentcalc/ICmain.png'

function InstrumentCalc() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Beginner Band Instrumentation Calculator</h1>
            <h2>Web Application</h2>
        </div>

        <div className='project-img'>
            <img src={ICmain} width='100%' height='100%'/>
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>Back when I was a band director, I remember constantly having to recalculate 
                my beginning band numbers. The instrumentation of the beginning band is integral
                for achieving a balanced sound in the band program.
                Planning for the instrumentation was difficult due to the constantly changing
                beginning band numbers. My principal would tell me that I would have 
                70 new beginners one week, then 170 the next week!
                <br/><br/>
                This app is designed to help band directors quickly calculate the 
                instrumentation of the beginner band. 
                There are 3 options: 
                <br/><br/>
                <strong>Full instrumentation</strong> - uses Scott Rush's "Habits of a Middle School Band Director"  
                instrumentation percentages
                <br/>
                <strong>Reduced instrumentation</strong> - does not include 
                specialty instruments
                <br/>
                <strong>Categorical instrumentation</strong> - only includes general instrument categories
                </p>
        </div>


        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Python</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-framework'>Flask</span>
                <span className='tool-framework'>Bootstrap</span>
                <span className='tool-deploy'>Heroku</span>
                <span className='tool-ide'>PyCharm</span>
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