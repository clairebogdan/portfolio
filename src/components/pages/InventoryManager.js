import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'

function InventoryManager() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Inventory Manager</h1>
            <h2>GUI Application</h2>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Java</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-framework'>JavaFX</span>
            </div>

            <div className='link-grid'>
                <h1><center>Link:</center></h1>
                <a className='btn' href="https://github.com/clairebogdan/C482_Project">GitHub Repo</a>
            </div>
        </div>

        <div className='description-box'>
            <p>this is where the description will go</p>
        </div>

        <ProjectNav />
        </body>
        </>
        );
    }
export default InventoryManager;