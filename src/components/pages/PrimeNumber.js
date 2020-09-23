import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function PrimeNumber() {

    return (
        <>
        <div className='project-top'>
            <h1>Prime Number Generator - CLI Application</h1>
            <h2>Java</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/PrimeNumberGenerator">GitHub Repo</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default PrimeNumber;