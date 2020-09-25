import React from 'react';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav';
import hurricaneBotVideo from '../../assets/project_pics/hurricane/hurricaneBotVideo.mp4'
import AIAward from '../../assets/project_pics/hurricane/AIAward.png'



function Hurricane() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Hurricane Cleanup Robot Simulation</h1>
            <h2>CoppeliaSim Simulation</h2>
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='80%' height='80%' controls>
                <source src={hurricaneBotVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>

        <div className='award'>
            <div className='img-grid-item'>
                <img src={AIAward} width='80%' height='80%'/>
            </div>

            <div className='img-grid-item'>
                <p>This project received an <strong>Excellence Award</strong> from Western
                    Governors University. The WGU Evaluation faculty has selected my project 
                    for recognition, due to the exceptional nature of the work. 
                    The evaluator stated: <i>"The work presents the code and the analysis of 
                    a modified BubbleRob agent that supports post-hurricane disaster recovery 
                    efforts. Fitting descriptions of the simulated robot, the development process, 
                    and its advantages, limitations, and future possible modifications are provided. 
                    The assessment demonstrates well-developed competencies in creating models with 
                    machine learning algorithms in order to extract actionable insights from data, 
                    analyzing the relationships and rules pertaining to intelligence within systems, 
                    distinguishing among search strategies to fit specific data-oriented problems, 
                    implementing basic intelligent agent technology in order to automate services, 
                    and writing code to enable robots to execute simple tasks."</i>
                </p>
            </div>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-ide'>CoppeliaSim</span>
            </div>

            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a className='btn-sm' href="https://github.com/clairebogdan/C951-Task-2">GitHub Repo</a>
                <a className='btn-sm' href="https://drive.google.com/file/d/1DISUXFLovLnZxd77woRtjcGHCS6DLDps/view?usp=sharing">Documentation</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default Hurricane;