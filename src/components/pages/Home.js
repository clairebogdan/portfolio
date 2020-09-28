import React from 'react';
import '../../App.css';
import '../styles/Home.css'
import boonie from '../../assets/boonie.jpg'

export default function Home() {
    return (
        <>
        <h1 className='home'>Hi, I'm Claire Bogdan</h1>
        <div className='headshot'>
            <img src={boonie} alt='dog'/>
        </div>
        </>
    );
}