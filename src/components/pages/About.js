import React from 'react';
import '../../App.css';
import '../styles/About.css'

export default function About() {
    return (
        <>
        <div className='intro'>
            <h1 className='about'>ABOUT ME</h1>
            <h4>Aspiring Software Engineer, Musician, Former Teacher</h4>
        </div>

        <div className='bio'>
            <p>Hi, I'm Claire!
                <br/><br/>
                I am a recent computer science graduate from Western Governors University (September 2020).
                This is just one aspect of my career change journey.
                <br/><br/>
                In June 2019, I decided to change careers. I originally went to the University of South Carolina
                to pursue a Bachelor's in Music Education, with a Performance Certificate in Oboe. While at UofSC, 
                I was the principal oboist of the Wind Ensemble as well as the Drum Major for the marching band
                (the Carolina Band). Upon graduation, I went on to be a public middle school band director for
                two years-- one year in Parkland, Florida, and another in Summerville, South Carolina.
                <br/><br/>
                During my first year teaching, I expereinced a school shooting. This was the main catalyst for 
                deciding to leave teaching. However, I was not sure what else I could do with my Music Education
                degree. I still loved teaching and performing, but I wanted to do something else as my career.
                <br/><br/>
                In November 2018, I was encouraged to try coding.
                <br/><br/>
                Now, I am searching for junior software engineering positions!              
            </p>
        </div>

        <div className='button-bar'>
            <button className='btn-link'>See Portfolio <i class="fas fa-chevron-right"></i></button>
            <button className='btn-link'>Contact Me <i class="fas fa-chevron-right"></i></button>
        </div>
        </>
    );
}