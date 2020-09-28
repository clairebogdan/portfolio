import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import reeds from '../../assets/reeds.jpg'
import bogdanReedsVideo from '../../assets/project_pics/bogdanreeds/bogdanReedsVideo.mp4'

function BogdanReeds() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Bogdan Reeds Ordering</h1>
            <h2>CLI Application</h2>
        </div>

        <div className='project-img'>
            <div className='blank'></div>
            <img src={reeds} alt="oboe reeds" width='85%' height='85%'/>
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='85%' height='85%' controls>
                <source src={bogdanReedsVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p>This project allows the user to "order" oboe reeds from my 
                company, Bogdan Reeds. As of right now, this is a prototype application.
                The user can interact with the CLI and answer questions regarding their 
                oboe reed order. The program collects the user's information such as 
                name, address, payment method, number of reeds, and shipping option.
                <br/><br/>
                This program will be expanded to become a website and web application.
            </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>Java</span>
                <span className='tool-ide'>NetBeans</span>
            </div>

            <div className='link-grid'>
                <h2 className='TL-headers'>Link:</h2>
                <a href="https://github.com/clairebogdan/bogdanreeds"className='btn-sm'>GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>

        </>
        );
    }
export default BogdanReeds;