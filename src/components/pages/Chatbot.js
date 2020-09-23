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
            <a className='btn' href="https://perfectfit-wgu.herokuapp.com">Chatbot Link</a>
            <a className='btn' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
            <a className='btn' href="https://drive.google.com/file/d/1e_SYjYdKVa6cWnmpoFJREmEoC1Jhodhj/view?usp=sharing">Documentation</a>
            <Link to='/portfolio' className='go-back'>
                Go back to Portfolio
            </Link>
        </div>
        </>
        );
    }
export default Chatbot;