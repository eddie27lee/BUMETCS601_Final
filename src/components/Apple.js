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
                            <img src={`${process.env.PUBLIC_URL}/images/apple.png`} alt="apple" class="project-image"></img>
                        </div>
                        
                    </div>
                    <div>
                        <p class="project-text">My current position is at Apple, where I am
                        a DevOps engineer contractor.
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