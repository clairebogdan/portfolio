import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'

function BogdanReeds() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Bogdan Reeds Ordering</h1>
            <h2>CLI Application</h2>
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
                <span className='tool-language'>Java</span>
            </div>

            <div className='link-grid'>
                <h1><center>Link:</center></h1>
                <a href="https://github.com/clairebogdan/bogdanreeds"className='btn'>GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>

        </>
        );
    }
export default BogdanReeds;