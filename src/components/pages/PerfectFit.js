import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'

function PerfectFit() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>PerfectFit</h1>
            <h2>Website and Web Application</h2>
        </div>

        <div className='project-img'>
            image goes here
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Python</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-language'>JavaScript</span>
                <span className='tool-framework'>Flask</span>
                <span className='tool-framework'>Bootstrap</span>
                <span className='tool-deploy'>Heroku</span>
                <span className='tool-database'>SQLite3</span>
                <span className='tool-ide'>PyCharm</span>
                <span className='tool-ide'>Jupyter Notebook</span>
            </div>
            

            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a className='btn-sm' href="https://perfectfit-wgu.herokuapp.com">Webpage</a>
                <a className='btn-sm' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
                <a className='btn-sm' href="https://drive.google.com/file/d/1e_SYjYdKVa6cWnmpoFJREmEoC1Jhodhj/view?usp=sharing">Documentation</a>               
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default PerfectFit;