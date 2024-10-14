import React from 'react';
import '../../App.css';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import headshot2 from '../../assets/about_pics/headshot2.jpeg'
import oboe2 from '../../assets/about_pics/oboe2.jpg'

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
                Welcome! I’m Claire Bogdan, a passionate full stack software engineer with four years of experience in developing dynamic web applications. Currently, I work at Immuta, where I focus on enhancing user experiences and driving technical initiatives.
                    <br /><br />
                    In my role, I lead efforts to improve onboarding processes and collaborate closely with cross-functional teams. I enjoy mentoring junior engineers and contributing to technical documentation that supports both internal teams and customers. My journey in software engineering has equipped me with a strong foundation in various programming languages and frameworks, allowing me to adapt and excel in diverse projects.
                    I am skilled in languages such as TypeScript, SQL, and Python, and I have experience with frameworks like Angular and PostgreSQL. My expertise extends to areas like RESTful APIs, Docker, and Agile methodologies, enabling me to build efficient and scalable solutions.
                </p>
            </div>

            <div className='bio'>
                <div className='bio-text'>
                    <h2>My career change story...</h2><br />
                    <p>Before transitioning to tech, I spent most of my life immersed in the music education realm.
                    I started playing the oboe in sixth grade, developing a passion for music that led me to major in Music Education at the University of South Carolina. As principal oboist of the Wind Ensemble and Drum Major of the marching band, I honed my leadership and teamwork skills.
After graduating in 2017, I spent my first year teaching as a middle school band director in Parkland, Florida. However, after the tragic Parkland shooting, I felt compelled to shift my career. I taught for another year, but knew I needed to make a change. 
My friends and family encouraged me to try coding, even though I had no prior experience. I discovered a strong connection between music and software engineering — both require attention to detail, creativity, and problem-solving.
I completed a Bachelor’s in Computer Science at Western Governors University and began my software engineering career in October 2020 at Immuta. I was promoted to Software Engineer II in March 2023!
                    </p>
                    <br/>
                </div>
                <div className='bio-pic'>
                    <img src={oboe2} alt="SC awards" width="100%" height="100%" />
                </div>

            </div>

            <div className='bio-container-sm'>
                <p>
                </p>
            </div>

            <div className='bio-container-sm'>
                <p>
                    Outside of work, I remain active in music through my freelance oboe performances and reed-making business, Bogdan Reeds. I love traveling, exploring local coffee shops, and spending time outdoors with my fiance and our standard poodle, Boone.
                </p>
            </div>

            <div className='button-bar'>
                <a className='about-btn' href={resume}>resume</a>

                <Link to='/portfolio' className='about-btn'>
                    portfolio <i class="fas fa-chevron-right"></i>
                </Link>

                <Link to='/contact' className='about-btn'>
                    contact <i class="fas fa-chevron-right"></i>
                </Link>
            </div>
        </>
    );
}