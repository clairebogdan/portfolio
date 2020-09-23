import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function InventoryManager() {

    return (
        <>
        <div className='project-top'>
            <h1>InventoryManager - GUI Application</h1>
            <h2>Java, JavaFX</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/C482_Project">GitHub Repo</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default InventoryManager;