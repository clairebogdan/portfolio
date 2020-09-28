import React from 'react';
import '../../App.css';
import '../styles/Home.css'
import boonie from '../../assets/boonie.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div className='headshot'>
            <div className='tag'>
                <h1>Hi, i'm Claire!</h1>
                <br/>
                <h2>Software engineer,<br/>
                    Former teacher,<br/>
                    Musician
                </h2>
                <br/>
                <Link to='/about' className='learn-more-btn'>
                    Learn more <i class="fas fa-chevron-right"></i>
                </Link>
            </div>
            <img src={boonie} alt='dog' width='100%' height='100%'/>
        </div>
        </>
    );
}