import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'

function Chatbot() {

    return (
        <>
        <div className='project-top'>
            <h1>Chatbot - Pandorabots</h1>
            <h2>AIML</h2>
            <p>Description of project</p>
        </div>

        <div className='link-grid'>
            <a className='btn' href="https://github.com/clairebogdan/C951_Task1">GitHub Repo</a>
            <a className='btn' href="https://drive.google.com/file/d/1tVEp0guZ-6Qn2QsW-SDrWwp7dcTGTq-r/view?usp=sharing">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default Chatbot;