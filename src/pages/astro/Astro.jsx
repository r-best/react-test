import React, { useState } from 'react';
import { AstroPics } from '../../assets'
import { AstroCard } from '../../components';

import "./astro.css";

const ASTRO = [
    {
        imageThumb: AstroPics.andromeda_nk_100923,
        imageFull: AstroPics.andromeda_nk_100923,
        name: "Andromeda Galaxy",
        date: "10-09-23",
        location: "New Kent, VA",
        exposures: "Unknown exposure @ ISO 1600",
        desc: []
    },
    {
        imageThumb: AstroPics.deneb_nk_100923,
        imageFull: AstroPics.deneb_nk_100923,
        name: "Deneb",
        date: "10-09-23",
        location: "New Kent, VA",
        exposures: "Unknown exposure @ ISO 1600",
        desc: []
    },
    {
        imageThumb: AstroPics.nanebula_nk_100923,
        imageFull: AstroPics.nanebula_nk_100923,
        name: "North America Nebula",
        date: "10-09-23",
        location: "New Kent, VA",
        exposures: "30 10s exposures @ ISO 1600",
        desc: []
    },
    {
        imageThumb: AstroPics.deneb_sp_100523,
        imageFull: AstroPics.deneb_sp_100523,
        name: "Deneb",
        date: "10-05-23",
        location: "Richmond, VA",
        exposures: "60 10s exposures @ ISO 1600",
        desc: [
            "My very first attempt at astrophotography! My alignment and focus were good, but I set up on a patio outside my apartment with a streetlamp a bit too close, which caused the red light bleed you can see in the bottom left corner."
        ]
    },
]

const Astro = () => {
    return (
        <div className='astro'>
            <h1>Astrophotography</h1>
            <p></p>
            <div>
                {ASTRO.map((item, i) => (
                    <div key={i}>
                        <AstroCard 
                            imageThumb={item.imageFull} 
                            imageFull={item.imageFull} 
                            name={item.name} 
                            date={item.date} 
                            location={item.location} 
                            exposures={item.exposures} 
                            desc_arr={item.desc} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Astro;
