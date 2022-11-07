import React from 'react';
import "./content.css";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home, Projects } from '../../pages'

const Content = () => {
    return (
        <div className='content'>
            <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/projects' element={<Projects />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Content;
