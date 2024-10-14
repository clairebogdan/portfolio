import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import bogdanReedsVideo from '../../assets/project_pics/bogdanreeds/bogdanReedsVideo.mp4'

function BogdanReeds() {

    return (
        <>
            <body>
                <div className='project-top'>
                    <div>
                        <Link to='/portfolio' className="pointer">
                            <i class="fas fa-chevron-left"></i>
                        </Link>
                    </div>
                    <div>
                        <h1>Oboe Reed Ordering</h1>
                        <h2>CLI Application</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>As a freelance oboist, I make and sell oboe reeds to
                        oboists across the US. When someone wants to order oboe reeds, it is important
                        that I know some information about the person that will use the reeds. I need to
                        know the customer's name, how many reeds they would like, how long the oboist has been playing,
                        their shipping address, their shipping method, and their payment
                        method. Once I have this information, I am able to make the customer's reed(s) and
                        ship them. This program allows the user to "order" oboe reeds from my
                        company, Bogdan Reeds.
                        <br /><br />

                        <span className='bold'>Technical: </span>This is a Java CLI application.
                        Via the command line, the customer inputs their answers
                        to the questions. The program uses try-catch blocks to prevent the
                        program from crashing when the user enters invalid information.
                        <i> This program concept has been fully implemented via </i>
                        <a href="https://www.bogdanreeds.com">bogdanreeds.com</a>.
                    </p>
                </div>

                <div className='project-img'>
                    <video width='85%' height='85%' controls>
                        <source src={bogdanReedsVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h2 className='TL-headers'>Tools:</h2>
                        <span className='tool-language'>Java</span>
                        <span className='tool-ide'>NetBeans</span>
                    </div>

                    <div className='link-grid'>
                        <h2 className='TL-headers'>Link:</h2>
                        <a href="https://github.com/clairebogdan/bogdanreeds" className='btn-sm'>GitHub Repo</a>
                    </div>
                </div>
                <div className='portfolio-button'>
                    <Link to='/portfolio' className='portfolio-button'>
                        <div className='portfolio-button'>
                            Back to Portfolio
                        </div>
                    </Link>
                </div>
            </body>

        </>
    );
}
export default BogdanReeds;