import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import mapVideo from '../../assets/project_pics/maryland/mapVideo.mp4'

function Maryland() {

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
                        <h1>Maryland Spending Data</h1>
                        <h2>Web Application</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>The goal of this project was to determine the top 3 zip codes where the state of
                        Maryland was spending most of its money in 2015. This information needed to be visually represented on a map with
                        markers that pinpoint the zip codes.

                        <br /><br />
                        <span className='bold'>Technical: </span>This web application used NodeJS for the backend, Hapi as the server, Angular
                        for the frontend, Leaflet for the map, and ran as a Docker container. <br /> <br />
                        First, I had to fetch the data from a government website that contained the state of Maryland's spending data.
                        This data was in JSON format. I grabbed this data using the module node-fetch.
                        In order to filter the data to get exactly what I needed, I used the module json-aggregate. This module helped
                        run SQL-like queries against the JSON. Once the top 3 zip code weres found, the latitude and longitudes for each
                        zip code needed to be found. Using Nominatim OpenStreetMaps API (https://nominatim.openstreetmap.org/), I inserted
                        each zip code to find the latitudes and longitudes. Nominatim has a usage policy of 1 search per second, so I used
                        a sleep function that delayed the execution of each search in the NodeJS code. Once the latitudes and longitudes were
                        found, this data was exposed to the user interface with the help of the Hapi server route. Using Angular and ui-leaflet,
                        the latitudes and longitudes were used to create markers on the map. When clicking on a marker, a message appears that includes
                        the rank of the spending (#1 = where Maryland spent the highest amount of money, #2 = where Maryland spent the second highest
                        amount of money, etc.), city, county, state, zip code, and country. <br /><br />
                        If needed, this application can show more markers than 3. This would require only one change in the source code.
                    </p>
                </div>

                <div className='project-img'>
                    <video width='80%' height='80%' controls>
                        <source src={mapVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h2 className='TL-headers'>Tools:</h2>
                        <span className='tool-language'>JavaScript</span>
                        <span className='tool-framework'>NodeJS</span>
                        <span className='tool-framework'>Hapi</span>
                        <span className='tool-framework'>AngularJS</span>
                        <span className='tool-framework'>Leaflet</span>
                        <span className='tool-deploy'>Docker</span>
                        <span className='tool-ide'>VS Code</span>
                    </div>

                    <div className='link-grid'>
                        <h2 className='TL-headers'>Link:</h2>
                        <h4>(Private, please request access)</h4>
                        <a className='btn-sm' href="https://github.com/clairebogdan/immuta">GitHub Repo</a>

                    </div>
                </div>
                <div className='portfolio-button'>
                    <Link to='/portfolio' className='portfolio-button'>
                        Back to Portfolio
                    </Link>
                </div>
            </body>
        </>
    );
}
export default Maryland;