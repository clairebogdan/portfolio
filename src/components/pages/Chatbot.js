import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import chatbotVideo from '../../assets/project_pics/chatbot/ChatbotVideo.mp4'

function Chatbot() {

    return (
        <>
            <body>
                <div className='project-top'>
                    <div>
                        <Link to='/portfolio' className="pointer">
                            <i class="fas fa-chevron-left"></i>
                        </Link>
                    </div>
                    <div>
                        <h1>Career Advisor Chatbot</h1>
                        <h2>Pandorabots Chatbot</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>The "WGU Computer Science Career Services Bot" was created to
                        help a hypothetical Computer Science advisor handle her increase of students.
                        She had more students than usual, and she was getting too many emails that had very simple answers. To
                        help decrease her email load, she needed a chatbot to handle many of the common questions that
                        her students asked her as an advisor.

                        <br /><br />
                        <span className='bold'>Technical: </span>
                        The chatbot was created using Pandorabots and AIML. Once you type a greeting (like "hello" or "hi") to the chatbot, the chatbot responds
                        with the following menu options: Take Career Path Quiz, See Career Path Options, Interview
                        Advice, and Schedule an Appointment.
                        <br /><br />
                        <strong>Take Career Path Quiz </strong> - This quiz is intended to help users/students find out
                        what career to pursue once finished with their CS degree. The user responds to the chatbot's
                        prompts by clicking answer choices that they align with the most. The quiz works like
                        a decision tree. Once the user has arrived at their answer, they can click a link
                        to learn more about that career, retake the quiz, or return to the main menu.
                        <br /><br />
                        <strong>See Career Path Options </strong> - Instead of taking the quiz, the chatbot gives the user
                        links to all of the career path options.
                        <br /><br />
                        <strong>Interview Advice </strong> - The chatbot gives the user links to websites that feature
                        useful interview advice/tips.
                        <br /><br />
                        <strong>Schedule an Appointment </strong> - The chatbot gives the user timeslots to choose from for
                        their appointment. Once the user clicks a time, the chatbot asks for the user's WGU email address.
                        If the email address is not a WGU email address, the chatbot rejects the appointment scheduling.
                    </p>
                </div>

                <div className='project-img'>
                    <video width='50%' height='50%' controls>
                        <source src={chatbotVideo} type="video/mp4" />
                    </video>
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
                <div className='portfolio-button'>
                    <Link to='/portfolio' className='portfolio-button'>
                        <div className='portfolio-button'>
                            Back to Portfolio
                        </div>
                    </Link>
                </div>
            </body>
        </>
    );
}
export default Chatbot;