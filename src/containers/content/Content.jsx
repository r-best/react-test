import { React, useEffect, useState } from 'react';
import "./content.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { markiplier } from '../../assets';
import { Home, PhoneticsGen, Projects, Rocks, Astro, TweetGen } from '../../pages'

const Content = () => {
    var [markEnabled, setMarkEnabled] = useState(window.getSecretSetting('mark'));
    useEffect(() => {
        window.registerSecretSettingListener('mark', setMarkEnabled)
    }, [])

    return (
        <div className='content'>
            <img className='content-markiplier' src={markiplier} hidden={!markEnabled} />

            <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/rocks' element={<Rocks />} />
                <Route exact path='/astro' element={<Astro />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/tweetgen' element={<TweetGen />} />
                <Route exact path='/phonetic-generator' element={<PhoneticsGen />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Content;
