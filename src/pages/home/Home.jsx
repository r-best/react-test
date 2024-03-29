import React, { useEffect } from 'react';
import { MdOpenInNew } from 'react-icons/md'

import { Logos } from '../../assets';
import { placeholder } from '../../assets';

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
            <hr style={{width: "50%"}} />
            <h3 className='home__subtitle'>Professional Software Developer</h3>
            <h3 className='home__subtitle'>Amateur Astrophotographer</h3>
            <h3 className='home__subtitle'>Aspiring Lapidary</h3>
            <h3 className='home__subtitle'>AND</h3>
            <h3 className='home__subtitle'>Cool Rocks Enthusiast</h3>
            <hr style={{width: "50%"}} />
            <div className='home__links'>
                <a className='global-buttonlink' target="_blank" rel="noreferrer" href="https://github.com/r-best">Github<MdOpenInNew /></a>
                {/* <a className='home__links' target="_blank" rel="noreferrer" href="/">LinkedIn<MdOpenInNew /></a> */}
            </div>
            {/* <p /> */}
            <p>Full time software developer based out of Richmond, VA. Full stack experience with a focus on enterprise and cloud-based solutions.</p>
            <p>Extensive experience with AWS architecture and services, and an interest in natural language processing and ML topics.</p>

            <h2>Preferred Languages/Technologies</h2>
            <div className='home__langs'>
                <div>
                    <img src={Logos.golang} alt="Golang logo" />
                    <p>Golang</p>
                </div>
                <div>
                    <img src={Logos.python} alt="Python logo" />
                    <p>Python</p>
                </div>
            </div>
            <div className='home__langs'>
                <div>
                    <img src={Logos.lambda} alt="AWS Lambda logo" />
                    <p>AWS Lambda</p>
                </div>
            </div>
            <div className='home__langs'>
                <div>
                    <img src={Logos.js} alt="JavaScript logo" />
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={Logos.react} alt="React logo" />
                    <p>React Web/Native</p>
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
