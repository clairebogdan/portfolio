import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import hurricaneBotVideo from '../../assets/project_pics/hurricane/hurricaneBotVideo.mp4'
import AIAward from '../../assets/project_pics/hurricane/AIAward.png'



function Hurricane() {

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
                        <h1>Hurricane Cleanup Robot Simulation</h1>
                        <h2>CoppeliaSim Simulation</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>(Fictional scenario) Hurricane Catherine (Category 5) severely damaged the coast of Charleston, South Carolina.
                        There are multiple fallen trees, downed powerlines, and large pieces of debris in the coastal
                        communities. The iClean robot’s task is to clean up small pieces of
                        debris (not shown in simulation) while gathering information about the larger debris objects
                        through the view of the vision sensor and camera. The iClean robot is useful because a) it allows
                        for an unmanned robot to inspect the dangerous area first without putting human lives in danger,
                        b) it gathers information about what kinds of large objects need to be address/cleaned up by a
                        human crew, and c) it cleans up small debris along the way (this is not visually represented in the
                        simulation). The identification of the kinds of debris objects will help disaster recovery team
                        know which kinds of trucks/people to send to that area. For example, if one area has several
                        fallen trees, it would be necessary to send out a crew with multiple trucks to pulverize the trees.
                        If another area has mostly downed powerlines, then a powerline crew should be sent to that
                        location. If all types of debris are found, the robot can show the area in which that specific debris
                        is located, thus specifying where to send specific types of clean-up crews.
                        <br /><br />

                        <span className='bold'>Technical: </span>Using the CoppeliaSim software, I followed one of the CoppeliaSim tutorials to
                        create a "BubbleRob". Then, I edited this BubbleRob (renamed "iClean") to include more sensors. I
                        edited the code to prevent the iClean from bumping into things while moving backwards. I added
                        cubiods to the scene to represent downed powerlines, trees, and large debris objects. The iClean has cameras
                        that allow the user to see the scene from the iClean's point of view. The iClean moves automatically and avoids
                        bumping into debris.</p>
                </div>

                <div className='project-img'>
                    <video width='80%' height='80%' controls>
                        <source src={hurricaneBotVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='award'>
                    <div className='img-grid-item'>
                        <img src={AIAward} alt="award" width='80%' height='80%' />
                    </div>

                    <div className='img-grid-item'>
                        <p>This project received an <strong>Excellence Award</strong> from Western
                            Governors University.

                            <br /><br />
                            The WGU Evaluation faculty selected my project
                            for recognition due to the exceptional nature of the work.
                            The evaluator stated:
                            <br /><br />
                            <strong><i>"The work presents the code and the analysis of
                                a modified BubbleRob agent that supports post-hurricane disaster recovery
                                efforts. Fitting descriptions of the simulated robot, the development process,
                                and its advantages, limitations, and future possible modifications are provided.
                                The assessment demonstrates well-developed competencies in creating models with
                                machine learning algorithms in order to extract actionable insights from data,
                                analyzing the relationships and rules pertaining to intelligence within systems,
                                distinguishing among search strategies to fit specific data-oriented problems,
                                implementing basic intelligent agent technology in order to automate services,
                                and writing code to enable robots to execute simple tasks."</i></strong>
                        </p>
                    </div>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h1><center>Tools:</center></h1>
                        <span className='tool-ide'>CoppeliaSim</span>
                    </div>

                    <div className='link-grid'>
                        <h1><center>Links:</center></h1>
                        <a className='btn-sm' href="https://github.com/clairebogdan/C951-Task-2">GitHub Repo</a>
                        <a className='btn-sm' href="https://drive.google.com/file/d/1DISUXFLovLnZxd77woRtjcGHCS6DLDps/view?usp=sharing">Documentation</a>
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
export default Hurricane;