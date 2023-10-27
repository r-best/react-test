import React from 'react';
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
        desc: [
            "My first shot of a galaxy! My alignment was a bit off which caused the stars to look stretched on the forward diagonal, but it was still magical to be looking up at a dark, mostly empty sky, not even sure if I was properly pointed at the galaxy, and then look down at the camera and see this reveal itself!"
        ]
    },
    {
        imageThumb: AstroPics.deneb_nk_100923,
        imageFull: AstroPics.deneb_nk_100923,
        name: "Deneb",
        date: "10-09-23",
        location: "New Kent, VA",
        exposures: "Unknown exposure @ ISO 1600",
        desc: [
            "Deneb is a bright star, easy to spot high in the sky from my location. It's usually the last star I align on, so it's easy to use as my first target of the night while I'm practicing my photography :)"
        ]
    },
    {
        imageThumb: AstroPics.nanebula_nk_100923,
        imageFull: AstroPics.nanebula_nk_100923,
        name: "North America Nebula",
        date: "10-09-23",
        location: "New Kent, VA",
        exposures: "30 10s exposures @ ISO 1600",
        desc: [
            "This was one of the first targets I was really looking forward to, I wanted to see how well I could capture objects other than stars, and I was really happy with the results! It was a shockingly good photo for my first ever attempt at shooting a nebula, and I can't wait to see how much I can improve on it going forward."
        ]
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
            <p>I've loved space ever since I was a little kid, and when [<a href="https://www.space.com/james-webb-space-telescope-first-photos">the first photos from the JWST</a>] were released in 2022, my interest hit an all time peak.</p>
            <p style={{margin: 0}}>I spent a long time daydreaming and researching, and the following year I started putting some work into it! In October 2023 I got myself a telescope and a camera, and started practicing taking good photos of the night sky.</p>
            <p>This is my current list of equipment!:</p>
            <ul style={{textAlign: "left"}}>
                <li><b>Telescope:</b> William Optics ZenithStar 81mm doublet refractor, f/6.9</li>
                    <ul>
                        <li>William Optics 0.8x Field Flattener</li>
                    </ul>
                <li><b>Guide Scope:</b> William Optics ZenithStar 50mm guide scope, f/4</li>
                <li><b>Mount:</b> Celestron AVX Equatorial Mount</li>
                <li><b>Camera:</b> Canon EOS Rebel T6i</li>
                    <ul>
                        <li>Modified from [<a href='https://nightskycamera.com/'>Night Sky Camera</a>], stock IR filter removed</li>
                    </ul>
                <li><b>Filter(s):</b> Optolong L-Pro Deep Sky light pollution filter</li>
            </ul>
            <p>Below is a collection of some of the photos I've taken!</p>
            <hr style={{width: "100%"}} />
            <p />
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
