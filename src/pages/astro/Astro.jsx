import React, { useState } from 'react';
import { AstroPics } from '../../assets'
import { AstroCard } from '../../components';

import "./astro.css";

const ASTRO = [
    {
        imageThumb: AstroPics.andromeda_nk_100923,
        imageFull: AstroPics.andromeda_nk_100923,
        name: "Andromeda Galaxy",
        desc: [
            "10-09-23",
            "New Kent, VA"
        ]
    },
    {
        imageThumb: AstroPics.deneb_nk_100923,
        imageFull: AstroPics.deneb_nk_100923,
        name: "Deneb",
        desc: [
            "10-09-23",
            "New Kent, VA"
        ]
    },
    {
        imageThumb: AstroPics.nanebula_nk_100923,
        imageFull: AstroPics.nanebula_nk_100923,
        name: "North America Nebula",
        desc: [
            "10-09-23",
            "New Kent, VA"
        ]
    },
]

const Astro = () => {
    const [fullViewImg, setFullViewImg] = useState(null);

    const openFullImgView = e => {
        setFullViewImg(e);
    }
    return (
        <div className='astro'>
            {fullViewImg !== null &&
                <div id="fullSizeImgView" onClick={() => setFullViewImg(null)}>
                    <img src={fullViewImg} alt="Full size astro pic" />
                </div>
            }
            <h1>Astrophotography</h1>
            <p></p>
            <div>
                {ASTRO.map((item, i) => (
                    <div key={i}>
                        <AstroCard 
                            imageThumb={item.imageFull} 
                            imageFull={item.imageFull} 
                            name={item.name} 
                            desc_arr={item.desc}
                            fullViewCallback={openFullImgView} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Astro;
