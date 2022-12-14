import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import "./navbar.css";

const NavBar = ({ routes }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <div className='navbar__links-container'>
                    {routes.map((item, i) => (
                        <p key={i}><a href={item.path}>{item.name}</a></p>
                    ))}
                </div>
            </div>
            <div className='navbar__menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => {
                        document.getElementsByClassName('navbar__menu-container')[0].className = 'navbar__menu-container navbar__menu-container--close'
                        setToggleMenu(false)
                    }} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => {
                        document.getElementsByClassName('navbar__menu-container')[0].className = 'navbar__menu-container navbar__menu-container--open'
                        setToggleMenu(true)
                    }} />}
                <div className='navbar__menu-container navbar__menu-container--close'>
                    {routes.map((item, i) => (
                        <p key={i}><a href={item.path}>{item.name}</a></p>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default NavBar;
