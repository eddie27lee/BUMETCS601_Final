import React from 'react';
import {Header, Footer} from './'
import { Link } from "react-router-dom";

function InventoryList(props) {
    return (
        <div class="container">
            <Header></Header>
            <main>
                <section class="content">
                    <h2>Merative</h2>

                    <div class="content clearfix">
                        <div class="project">
                            <img src={`${process.env.PUBLIC_URL}/images/merative.png`} alt="merative" class="project-image"></img>
                        </div>
                        
                    </div>
                    <div>
                        <p class="project-text">My previous position was at Merative, where I transitioned
                        to from IBM. Here I would continue to maintain and improve on the automation that I had created
                        at IBM. I would also develop automation for a weekly report on CVE violations from GitHub and JFrog REST APIs using Groovy.
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