import React from 'react';
import { MdOpenInNew } from 'react-icons/md'

import "./home.css";

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home__title'>Bobby Best</h1>
            <h2 className='home__subtitle'>Software Developer</h2>
            <p>You'll wait for me to add more details</p>
            <div className='home__links'>
                <a className='home__links' target="_blank" rel="noreferrer" href="https://github.com/r-best">Github<MdOpenInNew /></a>
                <a className='home__links' target="_blank" rel="noreferrer" href="/">LinkedIn<MdOpenInNew /></a>
            </div>
        </div>
    )
};

export default Home;
