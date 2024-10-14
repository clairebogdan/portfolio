import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import appointmentVideo from '../../assets/project_pics/appointment/appointmentVideo.mp4'

function AppointmentManager() {

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
                        <h1>Appointment Manager</h1>
                        <h2>GUI Application</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>This application helps people or
                        businesses manage their appointments with their customers. Users are required to
                        login using credentials that match the database. Once logged in, the user can see
                        a list of scheduled appointments for specific customers. Users are able to
                        add a new customer, modify or delete existing customers, add a new appointment,
                        modify or delete existing appointments, and create reports.

                        <br /><br />
                        <span className='bold'>Technical: </span>This Java/JavaFX application was built using NetBeans. The GUI
                        was constructed via SceneBuilder. When the user runs the application, the local
                        computer's language is detected. If the computer's language is set to Spanish, the login screen
                        will translate itself to Spanish. Otherwise, the text will be in English. When logging in, the
                        user's input for username and password is looked for in the MySQL database. If a match is found, then
                        the user is allowed to proceed. While in the main application, the user can INSERT INTO the database
                        by clicking Add Customer or Add Appointment and filling out the required information. The user can
                        UPDATE the database tables by clicking Modify Customer or Modify Appointment and changing appropriate
                        information. Users can also DELETE customers and appointments from the database when on the
                        "Modify Customer" or "Modify Appointment" pages. The Reports page allows the user to generate
                        3 different reports based on the data. Generating a report runs a SELECT statement against the
                        database and shows the results to the user in a textarea.</p>
                </div>

                <div className='project-img'>
                    <video width='80%' height='80%' controls>
                        <source src={appointmentVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h2 className='TL-headers'>Tools:</h2>
                        <span className='tool-language'>Java</span>
                        <span className='tool-language'>HTML</span>
                        <span className='tool-framework'>JavaFX</span>
                        <span className='tool-database'>MySQL</span>
                        <span className='tool-ide'>NetBeans</span>
                        <span className='tool-ide'>SceneBuilder</span>
                    </div>

                    <div className='link-grid'>
                        <h2 className='TL-headers'>Links:</h2>
                        <a className='btn-sm' href="https://github.com/clairebogdan/perfectfit">GitHub Repo</a>
                        <a className='btn-sm' href="https://drive.google.com/file/d/1gQlAtX8Cn2mVTpVP_KY5dF_aOzgfEdoX/view?usp=sharing">Documentation</a>
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
export default AppointmentManager;