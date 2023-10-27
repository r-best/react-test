import React from 'react';
import { NavBar } from '../../components';
import "./header.css";

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Software Projects",
        path: "/projects"
    },
    {
        name: "Astrophotography",
        path: "/astro"
    },
    {
        name: "Cool Rocks",
        path: "/rocks"
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
