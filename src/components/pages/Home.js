import React from 'react';
import '../../App.css';
import '../styles/Home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className='headshot'>
            <div className='home-text-outer'>
                <div className='home-text-inner'>
                    <h1>Hi, I'm Claire!</h1>
                    <br/>
                    <h2><i class="fas fa-laptop-code"></i> Software Engineer<br/><br/>
                        <i class="fas fa-apple-alt"></i> Former Teacher<br/><br/>
                        <i class="fas fa-music"></i> Musician<br/><br/>
                    </h2>
                    <br/>
                    <Link to='/about' className='learn-more-btn'>
                        Learn more <i class="fas fa-chevron-right"></i>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}