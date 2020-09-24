import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import num from '../../assets/primenum.jpg'

function PrimeNumber() {

    return (
        <>
        <body>
            <div className='project-top'>
                <h1>Prime Number Generator</h1>
                <h2>CLI Application</h2>
            </div>

            <div className='project-img'>
                <img src={num} width='100%' height='100%' />
            </div>

            <div className='description-box'>
                <h1><center>Description:</center></h1>
                <p>this is where the description will go</p>
            </div>

            <div className='tools-links'>
                
                <div className='tools'>
                    <h1><center>Tools:</center></h1>
                    <span className='tool-language'>Java</span>
                    <span className='tool-ide'>NetBeans</span>
                </div>

                <div className='link-grid'>
                    <h1><center>Link:</center></h1>
                    <a className='btn' href="https://github.com/clairebogdan/PrimeNumberGenerator">GitHub Repo</a>
                </div>
            </div>

            <ProjectNav />
            
        </body>
        </>
        );
    }
export default PrimeNumber;