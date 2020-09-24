import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav';

function Hurricane() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Hurricane Cleanup Robot Simulation</h1>
            <h2>CoppeliaSim Simulation</h2>
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
                <span className='tool-ide'>CoppeliaSim</span>
            </div>

            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a className='btn-sm' href="https://github.com/clairebogdan/C951-Task-2">GitHub Repo</a>
                <a className='btn-sm' href="https://drive.google.com/file/d/1DISUXFLovLnZxd77woRtjcGHCS6DLDps/view?usp=sharing">Documentation</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default Hurricane;