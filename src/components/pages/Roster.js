import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav'
import students from '../../assets/students.jpg'


function Roster() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Student Roster</h1>
            <h2>CLI Application</h2>
        </div>

        <div className='project-img'>
            <img src={students} width='100%' height='100%' />
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>C++</span>
                <span className='tool-ide'>NetBeans</span>
            </div>

            <div className='link-grid'>
                <h1><center>Link:</center></h1>
                <a className='btn' href="https://github.com/clairebogdan/C867_Project">GitHub Repo</a>
            </div>
        </div>

        <ProjectNav/>

        </body>
        </>
        );
    }
export default Roster;