import React from 'react';
import {Header, Footer} from './'
import { Link } from "react-router-dom";

function InventoryList(props) {
    return (
        <div class="container">
            <Header></Header>
            <main>
                <section class="content">
                    <h2>Altran</h2>

                    <div class="content clearfix">
                        <div class="project">
                            <img src={`${process.env.PUBLIC_URL}/images/altran.png`} alt="altran" class="project-image"></img>
                        </div>
                        
                    </div>
                    <div>
                        <p class="project-text">My first position was at Altran.
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