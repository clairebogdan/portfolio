import React from 'react';
import ProjectNav from '../navbar/ProjectNav';
import '../styles/ProjectItems.css'
import inventoryVideo from '../../assets/project_pics/inventory/inventoryVideo.mp4'

function InventoryManager() {

    return (
        <>
        <body>
        <div className='project-top'>
            <h1>Inventory Manager</h1>
            <h2>GUI Application</h2>
        </div>

        <div className='project-img'>
            <h3>Press the play button</h3>
            <video width='85%' height='85%' controls>
                <source src={inventoryVideo} type="video/mp4"/>
            </video>
        </div>

        <div className='description-box'>
            <h2><center>Description:</center></h2>
            <p><strong>Overview: </strong>This application was created in order to help a person 
                or business manage their inventory. The inventory is categoriezed into "parts" and 
                "products" with the assumption that several parts make up a product. For example, 
                a candle maker would need wax, fragerance, wicks, and jars (parts) in order to make 
                their candle (product). When running the application, users are able to add, modify, 
                and delete parts and products. <i>This project serves as a precedent 
                to the Appointment Manager application.</i>

                <br/><br/>
                <strong>Technical: </strong>This Java/JavaFX application was built using NetBeans. The GUI 
                was constructed with the help of SceneBuilder. This application does not have a database; 
                instead, parts and products are Java objects. Upon loading, the initial parts 
                and products that are shown are hard coded into the application. Additions, modifications, 
                and deletions are only temporarily saved. When exiting the program, these changes will be 
                removed. </p>
        </div>

        <div className='tools-links'>
            
            <div className='tools'>
                <h2 className='TL-headers'>Tools:</h2>
                <span className='tool-language'>Java</span>
                <span className='tool-language'>HTML</span>
                <span className='tool-framework'>JavaFX</span>
                <span className='tool-ide'>NetBeans</span>
                <span className='tool-ide'>SceneBuilder</span>
            </div>

            <div className='link-grid'>
                <h2 className='TL-headers'>Link:</h2>
                <a className='btn-sm' href="https://github.com/clairebogdan/C482_Project">GitHub Repo</a>
            </div>
        </div>

        <ProjectNav />

        </body>
        </>
        );
    }
export default InventoryManager;