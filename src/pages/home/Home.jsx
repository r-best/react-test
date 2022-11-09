import React, { useEffect } from 'react';
import { MdOpenInNew } from 'react-icons/md'

import "./home.css";

const Home = () => {
    useEffect(() => {
        // Credly script for certification badges
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); }
    })
    return (
        <div className='home'>
            <h1 className='home__title'>Bobby Best</h1>
            <h3 className='home__subtitle'>Software Developer and Cool Rocks Enthusiast</h3>
            <p>Full time software developer based out of Richmond, VA. Full stack experience with a focus on enterprise and cloud-based solutions.</p>
            <p>Extensive experience with AWS architecture and services, and an interest in natural language processing and ML topics.</p>
            <div className='home__links'>
                <a className='home__links' target="_blank" rel="noreferrer" href="https://github.com/r-best">Github<MdOpenInNew /></a>
                <a className='home__links' target="_blank" rel="noreferrer" href="/">LinkedIn<MdOpenInNew /></a>
            </div>

            <h2>Preferred Languages/Technologies</h2>
            <div className='home__langs'>
                <div>
                    <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" />
                    <p>Golang</p>
                </div>
                <div>
                    <img src="https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" />
                    <p>Python</p>
                </div>
            </div>
            <div className='home__langs'>
                <div>
                    <img src="https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg" />
                    <p>AWS Lambda</p>
                </div>
            </div>
            <div className='home__langs'>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                    <p>React Web/Native</p>
                </div>
            </div>
            <div className='home__langs'>
                <div>
                    <img src="https://img1.pnghut.com/11/14/20/XW8y3mmuwn/computer-program-text-software-objectoriented-programming-java-servlet.jpg" />
                    <p>Java</p>
                </div>
            </div>

            <h2>Certifications</h2>
            <div className='home__certifications'>
                {/* Credly Badge - AWS Solutions Architect */}
                <h3>AWS Solutions Architect - Associate Level</h3>
                <div
                    data-iframe-width="250"
                    data-iframe-height="270"
                    data-share-badge-id="c0dc4445-c1cf-4b6c-8b40-519ddd8c31e5"
                    data-share-badge-host="https://www.credly.com" />
            </div>
        </div>
    )
};

export default Home;
