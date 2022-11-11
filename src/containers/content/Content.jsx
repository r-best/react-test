import React from 'react';
import "./content.css";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home, PhoneticsGen, Projects, Rocks, TweetGen } from '../../pages'

const Content = () => {
    return (
        <div className='content'>
            <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/rocks' element={<Rocks />} />
                <Route exact path='/tweetgen' element={<TweetGen />} />
                <Route exact path='/phonetic-generator' element={<PhoneticsGen />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Content;
