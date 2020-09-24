import React from 'react';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav';
import chatbotVideo from '../../assets/project_pics/chatbot/ChatbotVideo.mp4'

function Chatbot() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Career Advisor Chatbot</h1>
            <h2>Pandorabots Chatbot</h2>
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='40%' height='40%' controls>
                <source src={chatbotVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>AIML</span>
                <span className='tool-ide'>Pandorabots</span>
            </div>

            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a className='btn-sm' href="https://github.com/clairebogdan/C951_Task1">GitHub Repo</a>
                <a className='btn-sm' href="https://drive.google.com/file/d/1tVEp0guZ-6Qn2QsW-SDrWwp7dcTGTq-r/view?usp=sharing">Documentation</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default Chatbot;