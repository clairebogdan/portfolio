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
                <h2>Hi, I'm Claire Bogdan! I am a recent computer science graduate from 
                Western Governors University (September 2020). I am actively searching for 
                software engineering opportunities in the Columbus, Ohio area. </h2>
            </div>
        </div>

        <div className='bio-container'>
            <p>Over the past year, I have completed 10 software engineering projects and obtained 
                4 certifications. These projects consist of assignments for my degree program as well 
                as personal projects (including this website). One of my web applications, PerfectFit, received the 
                Capstone Certificate of Excellence from WGU for its exemplary work.
                <br/><br/>
                Most of my work is written in either Python or Java. I have made web applications, command-line 
                applications, stand-alone applications, and dabbled in AI by creating a chatbot and a robot simulation. 
                Currently, I am working on improving my JavaScript skills. I always enjoy learning new things!
            </p>
            <div className='center'>
                <Link to='/portfolio' className='about-btn'>
                        See Portfolio <i class="fas fa-chevron-right"></i>
                </Link>
            </div>
        </div>

        <div className='bio'>
            <div className='bio-text'>
                <h2>My career change story...</h2><br/>
                <p>I started playing the oboe in the 6th grade. I loved playing the oboe and being in band. 
                    I continued to play in high school, participating in state and national level performing 
                    ensembles. Because of my passion in music, I decided to major in Music Education with a 
                    Performance Certificate in Oboe at the University of South Carolina (UofSC). While at UofSC, I was the principal 
                    oboist of the Wind Ensemble as well as the Drum Major for the marching band (the Carolina Band). 
                    Upon graduation in May 2017, I went on to be a public middle school band director for 
                    two years -- one year in Parkland, Florida, and another in Summerville, South Carolina.
                    </p>
            </div>
            <div className='bio-pic'>
                <img src={oboe2} alt="SC awards" width="100%" height="100%"/>
            </div>

            <div className='bio-pic'>
                <img src={plaques} alt="me with oboe" width="100%" height="100%"/>
            </div>
            <div className='bio-text'>
                <p>During my first year teaching, I experienced a school shooting. This was the main catalyst for 
                    deciding to leave teaching. I still loved teaching and performing, but I knew I needed to do 
                    something else as my career. This was when I was encouraged to try coding. I went to codecademy.com 
                    and followed along with one of their Java tutorials. There was an immediate connection. The fine attention 
                    to detail, trail and error process, and puzzle-solving reminded me so much of what it is like to learn music and 
                    play an instrument. I felt like so many skills translated from music making to coding. I knew from then on 
                    that I wanted to pursue a career as a software engineer. At the end of my second year of teaching, 
                    I started to pursue my Bachelor's in Computer Science. THIS IS NOT DONE YET!</p>
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