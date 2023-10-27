import React, { useState } from 'react';
import { RockPics } from '../../assets'
import { RockCard } from '../../components';

import "./rocks.css";

const ROCKS = [
    {
        image: RockPics.amethyst,
        name: "Amethyst",
        origin: "Unknown",
        obtained_at: "I forgot",
        desc: []
    },
    {
        image: RockPics.bismuth,
        name: "Bismuth",
        origin: "Unknown",
        obtained_at: "Smithsonian Air & Space Museum gift shop",
        desc: []
    },
    {
        image: RockPics.citrine,
        name: "Citrine",
        origin: "Unknown",
        obtained_at: "I forgot",
        desc: []
    },
    {
        image: RockPics.fluorite,
        name: "Fluorite",
        origin: "Mandrosonoro, Madagascar",
        obtained_at: "Packard's Stamp and Rock Shop",
        desc: []
    },
    {
        image: RockPics.garnet,
        name: "Garnet",
        origin: "Unknown",
        obtained_at: "Richmond, VA Gem and Mineral Society annual rock swap (2019)",
        desc: []
    },
    {
        image: RockPics.labradorite,
        name: "Labradorite",
        origin: "Unknown",
        obtained_at: "I forgot",
        desc: []
    },
    {
        image: RockPics.rhodochrosite,
        name: "Rhodochrosite",
        origin: "Guangzi, China",
        obtained_at: "Packard's Stamp and Rock Shop",
        desc: []
    },
    {
        image: RockPics.rhodonite,
        name: "Rhodonite",
        origin: "Brazil",
        obtained_at: "Packard's Stamp and Rock Shop",
        desc: []
    },
    {
        image: RockPics.ruby,
        name: "Ruby",
        origin: "Africa",
        obtained_at: "Packard's Stamp and Rock Shop",
        desc: [
            "Fluoresces under UV light!"
        ]
    },
    {
        image: RockPics.rutile,
        name: "Rutile",
        origin: "Graves Mt, Georgia",
        obtained_at: "Richmond, VA Gem and Mineral Society annual rock swap (2019)",
        desc: []
    },
]

const Rocks = () => {
    return (
        <div className='rocks'>
            <h1>Cool Rocks</h1>
            <div className='rocks-grid'>
                {ROCKS.map((item, i) => (
                    <div key={i}>
                        <RockCard 
                            image={item.image} 
                            name={item.name} 
                            origin={item.origin} 
                            obtained_at={item.obtained_at}
                            desc_arr={item.desc} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Rocks;
