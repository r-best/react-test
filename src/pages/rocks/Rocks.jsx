import React, { useState } from 'react';
import { RockPics } from '../../assets'
import RockCard from '../../components/rock-card/RockCard';

import "./rocks.css";

const ROCKS = [
    {
        image: RockPics.amethyst,
        name: "Amethyst",
        desc: []
    },
    {
        image: RockPics.bismuth,
        name: "Bismuth",
        desc: []
    },
    {
        image: RockPics.citrine,
        name: "Citrine",
        desc: []
    },
    {
        image: RockPics.fluorite,
        name: "Fluorite",
        desc: []
    },
    {
        image: RockPics.garnet,
        name: "Garnet",
        desc: []
    },
    {
        image: RockPics.labradorite,
        name: "Labradorite",
        desc: []
    },
    {
        image: RockPics.rhodochrosite,
        name: "Rhodochrosite",
        desc: []
    },
    {
        image: RockPics.rhodonite,
        name: "Rhodonite",
        desc: []
    },
    {
        image: RockPics.ruby,
        name: "Ruby",
        desc: []
    },
    {
        image: RockPics.rutile,
        name: "Rutile",
        desc: []
    },
]

const Rocks = () => {
    const [fullViewImg, setFullViewImg] = useState(null);

    const openFullImgView = e => {
        setFullViewImg(e.target.src);
    }
    return (
        <div className='rocks'>
            {fullViewImg !== null &&
                <div id="fullSizeImgView" onClick={() => setFullViewImg(null)}>
                    <img src={fullViewImg} alt="Full size rock pic" />
                </div>
            }
            <h1>Cool Rocks</h1>
            {ROCKS.map((item, i) => (
                <div key={i}>
                    <RockCard 
                        image={item.image} 
                        name={item.name} 
                        desc_arr={item.desc}
                        fullViewCallback={openFullImgView} />
                </div>
            ))}
        </div>
    )
};

export default Rocks;
