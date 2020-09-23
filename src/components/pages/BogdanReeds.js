import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function BogdanReeds() {

    return (
        <>
        <div className='project-top'>
            <h1>Bogdan Reeds Ordering - CLI Application</h1>
            <h2>Java</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a href="https://github.com/clairebogdan/bogdanreeds"className='btn'>GitHub Repo</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default BogdanReeds;