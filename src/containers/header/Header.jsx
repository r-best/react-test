import React, { useState } from 'react';
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
    var [isSecretVisible, setIsSecretVisible] = useState(false)

    var timeout = null
    var secretHover = (isHovering) =>  {
        if(isHovering){
            console.log("Starting Secret Timer")
            timeout = setTimeout(() => {
                setIsSecretVisible(true)
            }, 3000)
        } else {
            console.log("Clearing Secret Timer")
            clearTimeout(timeout)
        }
    }

    return (
        <div className='header'>
            <div className='header-secret'
                onMouseOver={() => {secretHover(true)}}
                onMouseLeave={() => {secretHover(false)}}>
                <button 
                    hidden={!isSecretVisible}
                    onClick={() => {window.toggleSecretMenu()}}>Secret</button>
            </div>
            <NavBar routes={routes}/>
        </div>
    )
};

export default Header;
