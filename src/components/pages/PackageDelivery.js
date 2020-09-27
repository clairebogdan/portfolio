import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import packages from '../../assets/project_pics/package_delivery/packages.jpg'
import packageDeliveryVideo from '../../assets/project_pics/package_delivery/packageDeliveryVideo.mp4'

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
            <div className='blank'></div>
            <img src={packages} alt="boxes in a delivery truck"  width='80%' height='80%' />
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='80%' height='80%' controls>
                <source src={packageDeliveryVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p>This project's main objective was to deliver a set list of 
                packages to a set list of locations. The packages and locations 
                were given. There are 2 "drivers" and three "trucks" to deliver the 
                packages. Minimizing the amount of miles traveled was important.
                <br/><br/>
                I used a chaining hash table to store package information and a graph 
                data structure to store locations. Then, I implemented a greedy algorithm 
                that selectively loaded the trucks in order to establish the shortest delivery 
                route possible.
            </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h1><center>Tools:</center></h1>
                <span className='tool-language'>Python</span>
                <span className='tool-ide'>PyCharm</span>
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