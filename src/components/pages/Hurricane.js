import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function Hurricane() {

    return (
        <>
        <div className='project-top'>
            <h1>Hurricane Cleanup Robot - CoppeliaSim Robot Simulation</h1>
            <h2>CoppeliaSim</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/C951-Task-2">GitHub Repo</a>
            <a className='btn' href="https://drive.google.com/file/d/1DISUXFLovLnZxd77woRtjcGHCS6DLDps/view?usp=sharing">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default Hurricane;