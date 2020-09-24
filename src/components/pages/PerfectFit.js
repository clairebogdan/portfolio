import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import PFmain from '../../assets/project_pics/perfectfit/PFmain.jpeg'
import PFtypes from '../../assets/project_pics/perfectfit/PFtypes.png'
import PFsignup from '../../assets/project_pics/perfectfit/PFsignup.png'
import PFlogin from '../../assets/project_pics/perfectfit/PFlogin.png'
import PFquiz from '../../assets/project_pics/perfectfit/PFquiz.png'
import PFresults from '../../assets/project_pics/perfectfit/PFresults.png'
import PFaward from '../../assets/project_pics/perfectfit/PFaward.png'


function PerfectFit() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>PerfectFit</h1>
            <h2>Website and Web Application</h2>
        </div>

        <div className='project-img'>
            <img src={PFmain} width='100%' height='100%'/>
        </div>

        <div className='project-img'>
            <img src={PFtypes} width='100%' height='100%'/>
        </div>

        <div className='img-grid'>
            <div className='img-grid-item'>
                <img src={PFsignup} width='100%' height='100%'/>
            </div>

            <div className='img-grid-item'>
                <img src={PFlogin} width='100%' height='100%'/>
            </div>
        </div>

        <div className='img-grid'>
            <div className='img-grid-item'>
                <img src={PFquiz} width='100%' height='100%'/>
            </div>

            <div className='img-grid-item'>
                <img src={PFresults} width='100%' height='100%'/>
            </div>
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>PerfectFit is a fictional company that seeks to help people
                find jobs that are great matches for them based on their
                personality.
            </p>
        </div>

        <div className='award'>
            <div className='img-grid-item'>
                <img src={PFaward} width='80%' height='80%'/>
            </div>

            <div className='img-grid-item'>
                <p>This project received the <strong>Capstone
                    Certificate of Excellence</strong> from Western
                    Governors University. The project was nominated by 
                    a WGU Evaluation faculty member for special recognition 
                    due to the exceptional nature of the project.
                    The evaluator stated: <i>"The Capstone analyzes a functioning 
                    Python Flask web application that allows the user to explore 
                    Myers-Briggs personality traits and potential careers. Users 
                    can take a personality test of their own and are provided with 
                    matching job titles from a trained Logistic Regression model. 
                    The work is well organized, mechanically sound, effectively 
                    details the phases of the development and the features of the 
                    data product, and demonstrates competencies supporting all 
                    program outcomes."</i>
                </p>
            </div>
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