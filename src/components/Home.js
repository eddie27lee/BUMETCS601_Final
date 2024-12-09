import React from 'react';
import {Header, Footer} from './'
import { Link } from "react-router-dom";

function InventoryList(props) {
    return (
        <div class="container">
            <Header></Header>
            <main>
                <section class="content">

                    <div class="content clearfix">
                        <h2>About Me</h2>
                        <img src={`${process.env.PUBLIC_URL}/images/propic.jpeg`} alt="propic" class="propic"></img>
                        <p class="portfolio-text">Hello! I am Eddie Lee, a graduate student at Boston University. Below are my projects, consisting of 
                            where I've worked! Click one for more detail!
                        </p>
                    </div>

                    <div class="grid">
                        <Link to={'/altran'}>
                            <div class="project">
                                <img src={`${process.env.PUBLIC_URL}/images/altran.png`} alt="Altran" class="float-image"></img>
                            </div>                        
                        </Link>
                        <Link to={'/ibm'}>
                            <div class="project">
                                <img src={`${process.env.PUBLIC_URL}/images/ibm.png`} alt="IBM" class="float-image"></img>
                            </div>
                        </Link>
                        <Link to={'/merative'}>
                            <div class="project">
                                <img src={`${process.env.PUBLIC_URL}/images/merative.png`} alt="Merative" class="float-image"></img>
                            </div>
                        </Link>
                        <Link to={'/apple'}>
                            <div class="project">
                                <img src={`${process.env.PUBLIC_URL}/images/apple.png`} class="float-image"></img>
                            </div>
                        </Link>
                    </div>

                </section>

                <aside class="sidebar">
                    <h2>You can find me here!</h2>
                    <a href="https://www.linkedin.com/in/edwardlee00/" class="linkedin">LinkedIn</a>
                </aside>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default InventoryList;