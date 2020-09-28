import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import num from '../../assets/project_pics/primenumber/primenum.jpg'
import primeNumberVideo from '../../assets/project_pics/primenumber/primeNumberVideo.mp4'

function PrimeNumber() {

    return (
        <>
        <body>
            <div className='project-top'>
                <h1>Prime Number Generator</h1>
                <h2>CLI Application</h2>
            </div>

            <div className='project-img'>
                <div className='blank'></div>
                <img src={num} alt="the number 13" width='85%' height='85%' />
            </div>

            <div className='project-img'>
                <h3>Press the play button</h3>
                <video width='85%' height='85%' controls>
                    <source src={primeNumberVideo} type="video/mp4"/>
                </video>
            </div>

            <div className='description-box'>
                <h2><center>Description:</center></h2>
                <p>The Prime Number Generator returns an ordered list of all prime numbers in a 
                    range (inclusive of the endpoints) that is specified by the user. The user enters their 
                    starting and ending values (range) in the command line. 
                    The program can handle inverse ranges such as that 1-10 and 10-1 are equivalent. 
                    Unit tests were created that pass and provide 100% code coverage. The program accounts for 
                    user error, allowing the user to try again or purposefully exit the program upon unacceptable 
                    input values.
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
                    <a className='btn-sm' href="https://github.com/clairebogdan/PrimeNumberGenerator">GitHub Repo</a>
                </div>
            </div>

            <ProjectNav />
            
        </body>
        </>
        );
    }
export default PrimeNumber;