import React, { useState } from 'react';
import { RockPics } from '../../assets'
import { RockCard } from '../../components';

import "./rocks.css";

const ROCKS = [
    {
        image: RockPics.amethyst,
        name: "Amethyst",
        desc: [
            "Unknown Origin"
        ]
    },
    {
        image: RockPics.bismuth,
        name: "Bismuth",
        desc: [
            "Smithsonian Air & Space Museum gift shop"
        ]
    },
    {
        image: RockPics.citrine,
        name: "Citrine",
        desc: [
            "Unknown Origin"
        ]
    },
    {
        image: RockPics.fluorite,
        name: "Fluorite",
        desc: [
            "Mandrosonoro, Madagascar",
            "From Packard's Stamp and Rock Shop"
        ]
    },
    {
        image: RockPics.garnet,
        name: "Garnet",
        desc: [
            "Unknown Origin",
            "From Richmond, VA Gem and Mineral Society annual rock swap (2019)"
        ]
    },
    {
        image: RockPics.labradorite,
        name: "Labradorite",
        desc: [
            "Unknown Origin"
        ]
    },
    {
        image: RockPics.rhodochrosite,
        name: "Rhodochrosite",
        desc: [
            "Guangzi, China",
            "From Packard's Stamp and Rock Shop"
        ]
    },
    {
        image: RockPics.rhodonite,
        name: "Rhodonite",
        desc: [
            "Brazil",
            "From Packard's Stamp and Rock Shop"
        ]
    },
    {
        image: RockPics.ruby,
        name: "Ruby",
        desc: [
            "Africa",
            "From Packard's Stamp and Rock Shop"
        ]
    },
    {
        image: RockPics.rutile,
        name: "Rutile",
        desc: [
            "Graves Mt, Georgia",
            "From Richmond, VA Gem and Mineral Society annual rock swap (2019)"
        ]
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
            <div className='rocks-grid'>
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
        </div>
    )
};

export default Rocks;
