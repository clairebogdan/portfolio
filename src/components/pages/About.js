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
                    I am currently a Fullstack Software Engineer at Immuta, primarily focusing on
                    web application development. I have experience building, maintaining, and deploying
                    production web applications and APIs. I use the following technologies almost daily:
                    Angular, Python, Docker, Kubernetes, PostgreSQL, GitHub, Jira, and AWS. Additionally,
                    I have experience in three identity management protocols: OpenID Connect, SAML, and JWT.
                    <br /><br />
                    Prior to starting my software engineering career at Immuta, I completed 13 projects and
                    obtained 4 certifications. These projects consist of assignments I completed
                    for my bachelor's degree program at Western Governors University (WGU)
                    as well as personal projects. I enjoy the ability to be creative through coding and
                    have created several different applications (web, command-line, and stand-alone) and
                    even dabbled in AI by creating a chatbot and a robot simulation. My certifications are in
                    web development, project management, and SQL.
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
                        oboist of the Wind Ensemble as well as the Drum Major for the marching band (the Carolina Band).
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
                        and followed along with one of their Java tutorials. There was an immediate connection. The fine attention
                        to detail, trial and error process, and puzzle-solving reminded me so much of what it is like to learn how to play
                        a new instrument. I felt that so many skills translated from music making to coding. I knew from then on
                        that I wanted become a software engineer. At the conclusion of my second year of teaching,
                        I started to pursue a Bachelor's of Computer Science at Western Governors University.</p>
                </div>
            </div>

            <div className='bio-container-sm'>
                <p>While going to school online, I worked as a freelance oboist and established my oboe reed
                    making business, <a className="link" href="https://www.bogdanreeds.com">Bogdan Reeds</a>. I taught private lessons and master classes at various schools,
                    performed in the Charleston Wind Symphony, and sold my hand-made oboe reeds.
                    I continue to make and sell my reeds to oboists all over the country.
                </p>
            </div>

            <div className='bio-container-sm'>
                <p>I finished my computer science degree in September 2020, and by October, found Immuta. I currently
                    work from home in Charleston, SC and fully embrace the remote work lifestyle. Outside of work,
                    I enjoy going to local coffee shops, breweries, and spending time outdoors with my partner
                    and our standard poodle, Boone.
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