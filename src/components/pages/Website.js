import React from 'react';
import '../styles/ProjectItems.css'
import ProjectNav from '../navbar/ProjectNav'
import mobile_headshot from '../../assets/mobile_headshot.jpg'

function Website() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>clairebogdan.com</h1>
            <h2>(This website)</h2>
        </div>

        <div className='project-img'>
            <div className='blank'></div>
            <img src={mobile_headshot} alt="headshot" width='100%' height='100%'/>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p><strong>Overview: </strong>At the conclusion of my computer science program, I decided I wanted to build my own 
                portfolio website from scratch. Previously, I already owned the domain clairebogdan.com and had a Wix website. 
                Wix, however, was not meeting my needs in terms of customization. I also wanted to get more experience with 
                web development without using Python/Flask.

                <br/><br/>
                <strong>Technical: </strong>This website was created using ReactJS. I chose React because I liked how simple 
                it was to get started (with create-react-app). Each page of this website is a JavaScript file with HTML embedded. 
                The CSS files help format the pages and adjust the sizing for mobile viewing. I used the module react-router-dom 
                to assist with routing and linking on the website. The Github repository for this website is used by Netlify for 
                deployment. Therefore, any edits I make and push to Github are automatically updated and deployed via Netlify. 
            </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>JavaScript</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-language'>CSS</span>
                <span className='tool-framework'>ReactJS</span>
                <span className='tool-framework'>NodeJS</span>
                <span className='tool-deploy'>Netlify</span>
                <span className='tool-ide'>VS Code</span>
            </div>

            <div className='link-grid'>
                <h2 className='TL-headers'>Link:</h2>
                <a className='btn-sm' href="https://github.com/clairebogdan/portfolio">GitHub Repo</a>
            </div>
        </div>

        <ProjectNav/>

        </body>
        </>
        );
    }
export default Website;