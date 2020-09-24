import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import reeds from '../../assets/reeds.jpg'

function BogdanReeds() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Bogdan Reeds Ordering</h1>
            <h2>CLI Application</h2>
        </div>

        <div className='project-img'>
            <img src={reeds} width='100%' height='100%'/>
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
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
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Java</span>
                <span className='tool-ide'>NetBeans</span>
            </div>

            <div className='link-grid'>
                <h1><center>Link:</center></h1>
                <a href="https://github.com/clairebogdan/bogdanreeds"className='btn'>GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>

        </>
        );
    }
export default BogdanReeds;