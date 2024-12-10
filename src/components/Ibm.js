import React from 'react';
import {Header, Footer} from './'
import { Link } from "react-router-dom";

function InventoryList(props) {
    return (
        <div class="container">
            <Header></Header>
            <main>
                <section class="content">
                    <h2>Apple</h2>

                    <div class="content clearfix">
                        <div class="project">
                            <img src={`${process.env.PUBLIC_URL}/images/ibm.png`} alt="ibm" class="project-image"></img>
                        </div>
                        
                    </div>
                    <div>
                        <p class="project-text">My first professional position was at IBM, where I began
                        working as a DevOps engineer. My first project was using Ansible to develop automation to backup all of the Jenkins
                        instances on a weekly basis. I would then go on to manage the GitHub administration, along with developing automation
                        to help with the process, such as creating nightly utilization metrics reports. Finally, I would manage the 
                        migration from IBM to Merative, communicating with managers to organize and validate all of our repositories. 
                        </p>
                    </div>

                </section>

                <aside class="sidebar">
                    <Link to={'/'} class="home">Return Home</Link>
                    <h2>You can find me here!</h2>
                    <a href="https://www.linkedin.com/in/edwardlee00/" class="linkedin">LinkedIn</a>
                </aside>
            </main>
            <Footer></Footer>
        </div> 
    );
}

export default InventoryList;