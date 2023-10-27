import React from 'react';
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
            <p>What can I say? Geology is cool</p>
            <p style={{margin: 0}}>If I hadn't been a software developer, maybe I would've been a geologist, or a lapidary</p>
            <p>I enjoy collecting interesting rocks and crystals, my collection keeps growing every year and pretty soon they're gonna outgrow the shelf I have them on and I'll need to get a proper display cabinet!</p>
            <p>Below you can find a record of (hopefully) all the rocks in my collection, or at least the cool ones! I try to record where they originated and where I got them, but I don't have that info for some of the early ones because I didn't think to track it at the time</p>
            <p>Click on the images to enlarge!</p>
            <hr style={{width: "100%"}} />
            <p />
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
