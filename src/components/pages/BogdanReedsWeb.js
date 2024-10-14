import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import bogdanreedsWebsiteVideo from '../../assets/project_pics/bogdanreeds/bogdanreedsWebsiteVideo.mp4'

function BogdanReedsWeb() {

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
                        <h1>bogdanreeds.com</h1>
                        <h2>Website</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>This project is the continuation/implementation
                        of the original Oboe Reed Ordering CLI application. Even though I am a full-time software
                        engineer, I enjoy making and selling oboe reeds in my spare time. I started selling reeds
                        in 2017 for my own brand, Bogdan Reeds. Using this website, customers are able to start their
                        order by filling out the email form. Once they hit send, their information is
                        emailed to me. Then, I determine whether or not I have the time to complete their order. In the
                        past, all ordered involved several back-and-forth emails to gather all the customer information that
                        I needed. Now, the customer just needs to fill out the one form, which will significantly decrease
                        the amount of emails we will send to each other. In addition to ordering, the website features the following
                        pages: About, FAQ, Reed Care, and a Gallery.
                        <br /><br />

                        <span className='bold'>Technical: </span>This website was created using ReactJS. This is the second website
                        I have created using React. I used the skills that I learned from creating this website (clairebogdan.com) to
                        create bogdanreeds.com. Each page of this website is a JavaScript file with HTML embedded.
                        The CSS files help format the pages and adjust the sizing for mobile viewing. I used the module react-router-dom
                        to assist with routing and linking on the website and emailjs-com for email capability.
                        The Github repository for this website is used by Netlify for
                        deployment. Therefore, any edits I make and push to Github are automatically updated and deployed via Netlify.
                    </p>
                </div>

                <div className='project-img'>
                    <video width='85%' height='85%' controls>
                        <source src={bogdanreedsWebsiteVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h2 className='TL-headers'>Tools:</h2>
                        <span className='tool-language'>JavaScript</span>
                        <span className='tool-language'>HTML</span>
                        <span className='tool-language'>CSS</span>
                        <span className='tool-framework'>ReactJS</span>
                        <span className='tool-framework'>NodeJS</span>
                        <span className='tool-deploy'>Netlify</span>
                        <span className='tool-ide'>VS Code</span>
                    </div>

                    <div className='link-grid'>
                        <h2 className='TL-headers'>Links:</h2>
                        <a className='btn-sm' href="https://www.bogdanreeds.com">Webpage</a>
                        <a href="https://github.com/clairebogdan/bogdanreeds_website" className='btn-sm'>GitHub Repo</a>
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
export default BogdanReedsWeb;