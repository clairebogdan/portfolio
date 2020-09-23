import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function PackageDelivery() {

    return (
        <>
        <div className='project-top'>
            <h1>Package Delivery - CLI Application</h1>
            <h2>Python</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/C950_take2">GitHub Repo</a>
            <a className='btn' href="">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default PackageDelivery;