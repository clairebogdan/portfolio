import React from 'react';
import '../../App.css';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import face from '../../assets/about_pics/face.jpg'
import resume from '../../assets/resume.pdf';


export default function Home() {
    return (
        <>
            <div className='mobile-headshot'>
                <img src={face} alt='headshot' width='100%' height='100%' />
            </div>

            <div className='mobile-container'>
                <div className='mobile-text'>
                    <h2><i class="fas fa-laptop-code"></i> software engineer<br /><br />
                        <i class="fas fa-apple-alt"></i> former teacher<br /><br />
                        <i class="fas fa-music"></i> musician<br /><br />
                    </h2>
                    <Link to='/about' className='learn-more-btn-mobile'>
                        learn more <i class="fas fa-chevron-right"></i>
                    </Link>
                    <div className='space'>
                            <a className='learn-more-btn' href={resume}>resume</a>
                        </div>
                </div>
            </div>

            <div className='home-grid'>

                <div className='home-item'>
                    <div className='home-picture'>
                        <img src={face} alt='headshot' width='100%' height='100%' />
                    </div>
                </div>

                <div className='home-item'>
                    <div className='home-info'>
                        <h2><i class="fas fa-laptop-code"></i> software engineer<br /><br />
                            <i class="fas fa-apple-alt"></i> former teacher<br /><br />
                            <i class="fas fa-music"></i> musician<br /><br />
                        </h2>
                        <br />
                        <Link to='/about' className='learn-more-btn'>
                            learn more <i class="fas fa-chevron-right"></i>
                        </Link>
                        <br/>
                        <div className='space'>
                            <a className='learn-more-btn' href={resume}>resume</a>
                        </div>
                        
                    </div>
                </div>

            </div>


        </>
    );
}