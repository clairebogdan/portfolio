import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import perfectFitVideo from '../../assets/project_pics/perfectfit/perfectFitVideo.mp4'
import PFaward from '../../assets/project_pics/perfectfit/PFaward.png'


function PerfectFit() {

    return (

        <body>
            <div className='project-top'>
                <div>
                    <Link to='/portfolio' className="pointer">
                        <i class="fas fa-chevron-left"></i>
                    </Link>
                </div>
                <div>
                    <h1>PerfectFit</h1>
                    <h2>Website and Web Application</h2>
                </div>
            </div>

            <div className='description-box'>
                <p><span className='bold'>Overview: </span>PerfectFit is a fictional company that seeks to match people to their ideal
                    career — or “perfect fit” — based on their personality.
                    In order to achieve this goal, I used a dataset from Kaggle.com that
                    observed a group of people’s Myers-Briggs personality types, careers, and
                    satisfaction with those careers. The data included a personality quiz as well.
                    Visitors to PerfectFit's website can see visualizations of the data, view information
                    about the fictional company, learn more about Myers-Briggs personality types, create
                    an account, login, and take the same personality quiz that the data was based on. By taking
                    this quiz, users see what their Myers-Briggs personality type is as well as predictions for
                    how satisfied they would be at 43 different jobs.

                    <br /><br />
                    <span className='bold'>Technical: </span>PerfectFit's website was built using Python/Flask and deployed using Heroku.
                    The data analysis (Principal Component Analysis) was conducted using Pandas and Jupyter Notebook,
                    then transferred to the main development IDE (PyCharm). The data visualizations seen on the Home page
                    were constructed using ChartJS and d3.js. In order to find out what career is your "perfect fit",
                    a user has to create an account. When the user successfully creates an account, the data is added to
                    the SQLite3 database. The password is encrypted using the Werkzueg package. The user then is able to login and
                    take the quiz. Once the user submits their answers, the program records their "personality scales" (values)
                    to the database. These numbers are run through the prediction model (logistic regression). This model
                    predicts satisfaction at each of the 43 jobs on a scale of 0 - 1 for a particular personality. Finally,
                    the user will see their Myers-Briggs personality type and their predicted satisfaction at each job.
                </p>
            </div>

            <div className='project-img'>
                <video width='85%' height='85%' controls>
                    <source src={perfectFitVideo} type="video/mp4" />
                </video>
            </div>

            <div className='award'>
                <div className='img-grid-item'>
                    <img src={PFaward} alt="award" width='80%' height='80%' />
                </div>

                <div className='img-grid-item'>
                    <p>This project received the <strong>Capstone
                        Certificate of Excellence</strong> from Western
                        Governors University. <br /><br />
                        It was nominated by
                        a WGU Evaluation faculty member for special recognition
                        due to the exceptional nature of the project.
                        The evaluator stated:<br /><br /> <strong><i>"The Capstone analyzes a functioning
                            Python Flask web application that allows the user to explore
                            Myers-Briggs personality traits and potential careers. Users
                            can take a personality test of their own and are provided with
                            matching job titles from a trained Logistic Regression model.
                            The work is well organized, mechanically sound, effectively
                            details the phases of the development and the features of the
                            data product, and demonstrates competencies supporting all
                            program outcomes."</i></strong>
                    </p>
                </div>
            </div>

            <div className='tools-links'>

                <div className='tools'>
                    <h2 className='TL-headers'>Tools:</h2>
                    <span className='tool-language'>Python</span>
                    <span className='tool-language'>HTML</span>
                    <span className='tool-language'>JavaScript</span>
                    <span className='tool-framework'>Flask</span>
                    <span className='tool-framework'>Bootstrap</span>
                    <span className='tool-deploy'>Heroku</span>
                    <span className='tool-database'>SQLite3</span>
                    <span className='tool-ide'>PyCharm</span>
                    <span className='tool-ide'>Jupyter Notebook</span>
                </div>


                <div className='link-grid'>
                    <h2 className='TL-headers'>Links:</h2>
                    <a className='btn-sm' href="https://perfectfit-wgu.herokuapp.com">Webpage</a>
                    <a className='btn-sm' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
                    <a className='btn-sm' href="https://drive.google.com/file/d/1e_SYjYdKVa6cWnmpoFJREmEoC1Jhodhj/view?usp=sharing">Documentation</a>
                </div>
            </div>
            <div className='portfolio-button'>
                <Link to='/portfolio'>
                    <div className='portfolio-button'>
                        Back to Portfolio
                    </div>
                </Link>
            </div>
        </body>

    );
}
export default PerfectFit;