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
            <a className='btn' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
            <a className='btn' href="https://drive.google.com/file/d/1e_SYjYdKVa6cWnmpoFJREmEoC1Jhodhj/view?usp=sharing">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default Roster;