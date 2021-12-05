import React from 'react';
import '../../App.css';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import headshot2 from '../../assets/about_pics/headshot2.jpeg'
import oboe2 from '../../assets/about_pics/oboe2.jpg'
import plaques from '../../assets/about_pics/plaques.jpg'

export default function About() {
    return (
        <>
            <div className='bio'>
                <div className='bio-intro'>
                    <h1>Hi, I'm Claire Bogdan!</h1>
                </div>
                <div className='bio-pic'>
                    <img src={headshot2} alt="claire bogdan herself" width="100%" height="100%" />
                </div>
            </div>

            <div className='bio-container'>
                <p>
                    I am a full stack software engineer, primarily focusing on
                    web application development. I have experience building, maintaining, and deploying
                    production web applications and APIs. I use the following technologies almost daily:
                    Angular, Python, PostgreSQL, Docker, Kubernetes, GitHub, Jira, and AWS.
                    <br /><br />
                    As a former teacher and musician, creativity and problem solving are important to me, and these values
                    carry over into my software engineering career. For me, coding is another avenue in which I can
                    create something from nothing that can add value to other people's lives.
                </p>
                <div className='center'>
                    <Link to='/portfolio' className='about-btn'>
                        See Portfolio <i class="fas fa-chevron-right"></i>
                    </Link>
                </div>
            </div>

            <div className='bio'>
                <div className='bio-text'>
                    <h2>My career change story...</h2><br />
                    <p>I started playing the oboe in the 6th grade. I loved playing the oboe and being in band.
                        I continued to play in high school, participating in state and national level performing
                        ensembles. Because of my passion for music, I decided to major in Music Education with a
                        Performance Certificate in Oboe at the University of South Carolina (UofSC). While at UofSC, I was the principal
                        oboist of the Wind Ensemble as well as the Drum Major for the marching band.
                        Upon graduation in May 2017, I went on to be a public middle school band director for
                        two years -- one year in Parkland, Florida, and another in Summerville, South Carolina.
                    </p>
                </div>
                <div className='bio-pic'>
                    <img src={oboe2} alt="SC awards" width="100%" height="100%" />
                </div>

                <div className='bio-pic'>
                    <img src={plaques} alt="me with oboe" width="100%" height="100%" />
                </div>
                <div className='bio-text'>
                    <p>During my first year teaching, I experienced the Parkland shooting. This was the main catalyst for
                        deciding to leave teaching. I still loved teaching and performing, but I knew I needed to do
                        something else as my career. This was when I was encouraged to try coding. I went to codecademy.com
                        and completed one of their Java tutorials. There was an immediate connection! The fine attention
                        to detail, trial and error process, and puzzle-solving reminded me so much of what it is like to learn how to play
                        a new instrument. I felt that so many skills translated from music making to coding. I knew from then on
                        that I wanted become a software engineer. At the conclusion of my second year of teaching,
                        I started to pursue a Bachelor's of Computer Science at Western Governors University.</p>
                </div>
            </div>

            <div className='bio-container-sm'>
                <p>While going to school online, I worked as a freelance oboist and invested more time in my oboe reed
                    making business, <a className='link' href="https://www.bogdanreeds.com">Bogdan Reeds</a>.
                    I taught private lessons and master classes at various schools,
                    performed in the Charleston Wind Symphony, and sold my hand-made oboe reeds.
                    I continue to make and sell my reeds in my spare time.
                </p>
            </div>

            <div className='bio-container-sm'>
                <p>I finished my computer science degree in September 2020, and by October, officially started my
                    career as a software engineer. I currently work at Immuta in Columbus, OH and also enjoy working remotely
                    from time to time in Charleston, SC (where I grew up). Outside of work,
                    I enjoy traveling, going to local coffee shops and breweries, playing music, and
                    spending time outdoors with my partner and our standard poodle, Boone.
                </p>
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