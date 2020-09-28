import React from 'react';
import '../../App.css';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import computer from '../../assets/about_pics/computer.jpg'
import oboe2 from '../../assets/about_pics/oboe2.jpg'
import plaques from '../../assets/about_pics/plaques.jpg'

export default function About() {
    return (
        <>
        <div className='about-title'>
            <h1>ABOUT ME</h1>
        </div>

        <div className='bio'>
            <div className='bio-pic'>
                <img src={computer} alt="computer" width="100%" height="100%"/>
            </div>
            <div className='bio-text'>
                <p>I am a recent computer science graduate from Western Governors University (September 2020).
                This is just one aspect of my career change journey.</p>
            </div>

            <div className='bio-text'>
                <p>In June 2019, I decided to change careers. I originally went to the University of South Carolina (UofSC)
                to pursue a Bachelor's in Music Education, with a Performance Certificate in Oboe. While at UofSC, 
                I was the principal oboist of the Wind Ensemble as well as the Drum Major for the marching band
                (the Carolina Band). Upon graduation in May 2017, I went on to be a public middle school band director for
                two years-- one year in Parkland, Florida, and another in Summerville, South Carolina.
                During my first year teaching, I expereinced a school shooting. This was the main catalyst for 
                deciding to leave teaching. I still loved teaching and performing, but I knew I needed to do 
                something else as my career.</p>
            </div>
            <div className='bio-pic'>
                <img src={plaques} alt="SC awards" width="100%" height="100%"/>
            </div>

            <div className='bio-pic'>
                <img src={oboe2} alt="me with oboe" width="100%" height="100%"/>
            </div>
            <div className='bio-text'>
                <p>stuff!!!!</p>
            </div>

        </div>

        <div className='button-bar'>
            <a className='about-btn' href={resume}>Resume</a>

            <Link to='/portfolio' className='about-btn'>
                    See Portfolio <i class="fas fa-chevron-right"></i>
            </Link>
            
            <Link to='/contact' className='about-btn'>
                    Contact Me <i class="fas fa-chevron-right"></i>
            </Link>
        </div>
        </>
    );
}