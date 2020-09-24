import React from 'react';
import { Link } from 'react-router-dom';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'

function PackageDelivery() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Package Delivery</h1>
            <h2>Based on the "Traveling Salesman Problem"</h2>
            <h2>CLI Application</h2>
        </div>

        <div className='project-img'>
            image goes here
        </div>

        <div className='description-box'>
            <h1><center>Description:</center></h1>
            <p>this is where the description will go</p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Python</span>
            </div>

            <div className='link-grid'>
                <h1><center>Links:</center></h1>
                <a className='btn-sm' href="https://github.com/clairebogdan/C950_take2">GitHub Repo</a>
                <a className='btn-sm' href="https://drive.google.com/file/d/1r3MuCtFXhWEFoWj9-9KH3P5A_7Bu8_Ql/view?usp=sharing">Documentation</a>
            </div>
        </div>

        <ProjectNav />

        </body>

        </>
        );
    }
export default PackageDelivery;