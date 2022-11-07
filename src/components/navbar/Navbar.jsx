import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <div className='navbar__links-container'>
                    <p><a href="/">Home</a></p>
                    <p><a href="/projects">Projects</a></p>
                </div>
            </div>
            <div className='navbar__menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className='navbar__menu-container'>
                        <p><a href="/">Home</a></p>
                        <p><a href="/projects">Projects</a></p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Navbar;
