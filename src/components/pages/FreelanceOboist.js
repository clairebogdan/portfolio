import React from 'react';
import '../../App.css';
import '../styles/Immuta.css';
import { Link } from 'react-router-dom';


function FreelanceOboist() {

    return (
        <>
            <body>
            <div className='experience-top'>
                <div>
                    <Link to='/portfolio' className="pointer">
                        <i class="fas fa-chevron-left"></i>
                    </Link>
                </div>
            </div>
                <div id='career-1'>
                    <div className='grid-title'>
                        Private Oboe Lesson Teacher
                    </div>
                    <div className='center'>
                        <div>
                            <br />
                            <h3>
                                August 2016 - October 2019
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='exp-box'>
                        <br />
                        * Started my own private lesson oboe studio where I taught middle and high school oboists.
                        <br /><br />
                        * Led master classes at local middle and high schools.
                        <br /><br />
                    </div>

                <div id='career-2'>
                    <div className='grid-title'>
                        Bogdan Reeds
                    </div>
                    <div className='center'>
                        <div>
                            <br />
                            <h3>
                                Self-employed oboe reed business &nbsp; May 2017 - current &nbsp;
                            </h3>
                        </div>
                    </div>

                    <div className='exp-box'>
                        <br />
                        * After many years of learning to make my own oboe reeds, I started this business where I sell the reeds that I make to other oboists.
                        I built my website, <a className='link' href='https://www.bogdanreeds.com/'>Bogdan Reeds</a>, where customers can learn about my reeds and contact me to order.
                        <br /><br />
                        * I currently make oboe reeds as my side business!
                        <br /><br />
                    </div>
                </div>

                
            </body>

        </>
    );
}
export default FreelanceOboist;



