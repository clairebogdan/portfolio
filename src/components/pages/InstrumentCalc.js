import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css';
import instrumentCalcVideo from '../../assets/project_pics/instrumentcalc/instrumentCalcVideo.mp4'

function InstrumentCalc() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Beginner Band Instrumentation Calculator</h1>
            <h2>Web Application</h2>
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='85%' height='85%' controls>
                <source src={instrumentCalcVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p><span className='bold'>Overview: </span>As a former middle school band director, I know the 
                importance of having a "balanced" beginning band. Having the correct 
                number of students on each instrument is important to achieve this balanced sound. 
                However, the prediction for the number of students joining beginning band constantly 
                changes. Every time the prediction would change, I would have to recalculate the numbers 
                by hand. To solve this problem, I created an application that takes in the user's number of students 
                for their beginner band and calculates how many students should be assigned to each instrument. Using this 
                application is <i>much</i> faster than doing the calculations by hand. 
                <br/><br/>
                <span className='bold'>Technical: </span>This is a Python/Flask web application deployed on Heroku. The user inputs a 
                number (total number of students that will be in their beginner band) and selects one of the following options:
                <br/><br/>
                <strong>Full instrumentation</strong> - uses Scott Rush's "Habits of a Middle School Band Director"  
                instrumentation percentages
                <br/>
                <strong>Reduced instrumentation</strong> - does not include 
                specialty instruments
                <br/>
                <strong>Categorical instrumentation</strong> - only includes general instrument categories
                <br/><br/>
                When the user clicks submit, the instrumentation is calculated and is shown to the user. 
                </p>
        </div>


        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>Python</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-framework'>Flask</span>
                <span className='tool-framework'>Bootstrap</span>
                <span className='tool-deploy'>Heroku</span>
                <span className='tool-ide'>PyCharm</span>
            </div>


            <div className='link-grid'>
                <h2 className='TL-headers'>Links:</h2>
                <a href="https://beginner-band.herokuapp.com" className='btn-sm'>Webpage</a>
                <a href="https://github.com/clairebogdan/Beginner_Instrumentation_Calculator"className='btn-sm'>GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default InstrumentCalc;