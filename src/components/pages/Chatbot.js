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
            <video width='50%' height='50%' controls>
                <source src={chatbotVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p>The "WGU Computer Science Career Services Bot" is a chatbot I created using pandorabots and AIML. 
                Once you type a greeting (like "hello" or "hi") to the chatbot, the chatbot will respond 
                with the following menu options: Take Career Path Quiz, See Career Path Options, Interview 
                Advice, and Schedule an Appointment. 
                <br/><br/>
                <strong>Take Career Path Quiz: </strong>This quiz is intended to help users/students find out 
                what career path to take once finished with their CS degree. The user responds to the chatbot's 
                prompts by clicking answer choices that they align with the most. Essentially, the quiz works like 
                a decision tree. Once the user has arrived at their answer, they can click the link (provided by the chatbot) 
                to learn more about that career path, retake the quiz, or return to the main menu.
                <br/><br/>
                <strong>See Career Path Options: </strong>Instead of taking the quiz, the chatbot will give the user 
                links to all of the career path options.
                <br/><br/>
                <strong>Interview Advice: </strong>The chatbot will give the user links to websites that feature 
                useful interview advice/tips. 
                <br/><br/>
                <strong>Schedule an Appointment: </strong>The chatbot will give the user timeslots to choose from for 
                their appointment. Once the user clicks a time, the chatbot will ask for the user's WGU email address. 
                If the email address is not a WGU email address, the chatbot will reject the appointment scheduling.
            
                  </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>AIML</span>
                <span className='tool-ide'>Pandorabots</span>
            </div>

            <div className='link-grid'>
                <h2 className='TL-headers'>Links:</h2>
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