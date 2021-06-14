import React from 'react';
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
                        <source src={primeNumberVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='description-box'>
                    <h2><center>Description:</center></h2>
                    <p><span className='bold'>Overview: </span>Prime numbers are natural numbers that
                        are only divisible by 1 and themselves.
                        The Prime Number Generator returns an ordered list of all prime numbers in a
                        given range (inclusive of the endpoints).
                        The program can handle inverse ranges such as that 1-10 and 10-1 are equivalent.
                        <br /><br />
                        <span className='bold'>Technical: </span>This Java CLI application allows the user to enters their
                        starting and ending values (range) in the command line. The program accounts for
                        user error, allowing the user to try again or purposefully exit the program upon unacceptable
                        input values. JUnit tests were created to make sure that the prime numbers that were generated
                        were truly prime. The algorithm can find all prime numbers between 1 and 1 million in 13 seconds,
                        and all prime numbers between 1 and 10 million in 64 seconds.
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


            </body>
        </>
    );
}
export default PrimeNumber;