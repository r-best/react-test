import React from 'react';
import { NavBar } from '../../components';
import "./header.css";

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projects",
        path: "/projects"
    }
]

const Header = () => {
    return (
        <div className='header'>
            <NavBar routes={routes}/>
        </div>
    )
};

export default Header;
