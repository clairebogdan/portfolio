import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import inventoryVideo from '../../assets/project_pics/inventory/inventoryVideo.mp4'

function InventoryManager() {

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
                        <h1>Inventory Manager</h1>
                        <h2>GUI Application</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>This application helps people/businesses manage their inventory.
                        The inventory is categorized into "parts" and "products" where parts make up a product.
                        For example,
                        a candle company needs wax, fragrance, wicks, and jars (parts) in order to make
                        their candle (product). When running the application, users are able to add, modify,
                        and delete parts and products from the inventory. <i>This project serves as a precedent
                            to the Appointment Manager application.</i>

                        <br /><br />
                        <span className='bold'>Technical: </span>This Java/JavaFX application was built using NetBeans. The GUI
                        was constructed via SceneBuilder. This application does not have a database;
                        instead, parts and products are Java objects. Upon loading, the initial parts
                        and products that are shown are hard coded into the application. Additions, modifications,
                        and deletions of parts and products are only temporarily saved.
                        When exiting the program, any changes that were made
                        are removed.</p>
                </div>

                <div className='project-img'>
                    <video width='85%' height='85%' controls>
                        <source src={inventoryVideo} type="video/mp4" />
                    </video>
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
export default InventoryManager;