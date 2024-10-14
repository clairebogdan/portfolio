import React from 'react';
import '../styles/ProjectItems.css'
import { Link } from 'react-router-dom';
import packageDeliveryVideo from '../../assets/project_pics/package_delivery/packageDeliveryVideo.mp4'

function PackageDelivery() {

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
                        <h1>Package Delivery</h1>
                        <h2>Based on the "Traveling Salesman Problem"</h2>
                        <h2>CLI Application</h2>
                    </div>
                </div>

                <div className='description-box'>
                    <p><span className='bold'>Overview: </span>(Fictional scenario) The Western Governors
                        University Postal Service (WGUPS) is a small package delivery company serving the
                        Salt Lake City, Utah area. The company has 2 drivers and 3 trucks. Each truck can fit
                        a maximum of 16 packages. The challenge is for WGUPS to deliver 40 packages to 27
                        locations on time with a minimum amount of total miles traveled. Several packages have
                        special circumstances, such as: delayed on a flight, wrong address listed, must be on truck 2,
                        must be delivered on the same truck as other packages.
                        <br /><br />
                        <span className='bold'>Technical: </span>This application was written in Python.
                        I used a chaining hash table to store information for the 40 packages. This provided for a faster lookup
                        when users search for a specific package (O(N)). I used a graph data structure to store the 27
                        locations. The graph had undirected, weighted edges (weight = miles between each location).
                        I implemented a greedy algorithm (O(N^2))in order to find the best route for the packages to be delivered.
                        The algorithm chose the best (shortest) path for each truck to take. This successfully
                        got all packages delivered on time. The total mileage for all trucks was 117.8 miles. Anything under
                        170 total miles was considered successful for this project.
                        <br /><br />
                        <strong><center>How it works:</center></strong>
                        <br />
                        <strong>Intro: </strong>Ask the user if they would like to A) look up a package or B) start deliveries.
                        <br /><br />
                        <strong>Look up a package</strong> - User enters the package ID they are looking for. The program returns the
                        package information. This is where the chaining hash table is useful for fast lookup.
                        <br /><br />
                        <strong>Start deliveries</strong> - Packages are selectively loaded onto all 3 trucks.
                        The truck loading process implements the chaining hash table full of packages, the graph full
                        of locations, and the greedy algorithm to get the shortest path that each truck will take.
                        All 3 trucks are loaded even though there are only 2 drivers.
                        The third truck will standby until one of the drivers returns after
                        finishing that truck's deliveries.
                        <br /><br />
                        <strong>Truck 1 leaves at 8:00AM</strong> - Truck 1 leaves to make deliveries.
                        <br /><br />
                        <strong>Truck 2 waits then leaves</strong> - Because some packages are delayed on a flight, truck 2
                        waits for them to arrive at the hub. Once they arrive, truck 2 leaves and makes deliveries.
                        <br /><br />
                        <strong>Truck 1 finishes, driver changes to truck 3, truck 3 leaves</strong> - Truck 3 makes deliveries.
                        <br /><br />
                        <strong>Package address needs to change at 10:20AM</strong> - There is an alert that package #9
                        has the wrong address and needs to be fixed. The user fixes the address and the program continues.
                        <br /><br />
                        <strong>Truck 2 and 3 return to the hub at 11:58AM</strong> - All 40 packages were delivered to 27 locations
                        by 11:58AM. Total milage was 117.8 miles.
                    </p>
                </div>

                <div className='project-img'>
                    <h3>Press the play button</h3>
                    <video width='80%' height='80%' controls>
                        <source src={packageDeliveryVideo} type="video/mp4" />
                    </video>
                </div>

                <div className='tools-links'>

                    <div className='tools'>
                        <h2 className='TL-headers'>Tools:</h2>
                        <span className='tool-language'>Python</span>
                        <span className='tool-ide'>PyCharm</span>
                    </div>

                    <div className='link-grid'>
                        <h2 className='TL-headers'>Links:</h2>
                        <a className='btn-sm' href="https://github.com/clairebogdan/C950_take2">GitHub Repo</a>
                        <a className='btn-sm' href="https://drive.google.com/file/d/1r3MuCtFXhWEFoWj9-9KH3P5A_7Bu8_Ql/view?usp=sharing">Documentation</a>
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

        </>
    );
}
export default PackageDelivery;