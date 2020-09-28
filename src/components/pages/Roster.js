import React from 'react';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav'
import students from '../../assets/project_pics/roster/students.jpg'
import rosterOutput from '../../assets/project_pics/roster/rosterOutput.png'


function Roster() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Student Roster</h1>
            <h2>CLI Application</h2>
        </div>

        <div className='project-img'>
            <div className='blank'></div>
            <img src={students} alt="students in a classroom" width='80%' height='80%' />
        </div>

        <div className='project-img'>
            <h3>Program output:</h3>
            <img src={rosterOutput} alt="code output" width='80%' height='80%' />
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p><strong>Overview: </strong>Using a given class roster consisting of 5 students, show the following 
                information to the user:
                <br/>
                All students and their information,
                a list of invalid email addresses, 
                the average amount of days that each student can complete 3 courses, 
                students in the software degree program, removal of a student from the roster, 
                an updated list of all students, and a search output for the removed student.

                <br/><br/>
                <strong>Technical: </strong>This C++ application was the first coding project I completed at 
                Western Governors University. The program simply prints to the console and 
                does not require user interaction (other than pressing "run"). This project 
                demonstrated my knowledge of the basics object oriented programming, writing functions, 
                parsing array string data, creating enum variables, looping through an array, and printing 
                to the console. 
            </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>C++</span>
                <span className='tool-ide'>NetBeans</span>
            </div>

            <div className='link-grid'>
                <h2 className='TL-headers'>Link:</h2>
                <a className='btn-sm' href="https://github.com/clairebogdan/C867_Project">GitHub Repo</a>
            </div>
        </div>

        <ProjectNav/>

        </body>
        </>
        );
    }
export default Roster;