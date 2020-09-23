import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function Roster() {

    return (
        <>
        <div className='project-top'>
            <h1>Student Roster - CLI Application</h1>
            <h2>C++</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/C867_Project">GitHub Repo</a>
            <a className='btn' href="">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default Roster;