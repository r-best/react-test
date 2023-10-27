import React from 'react';

import "./rockcard.css";

const RockCard = ({image, name, origin, obtained_at, desc_arr}) => {
    return (
        <div className='rockcard'>
            <img src={image} className='rockcard-image' alt="Rock" onClick={e => window.openFullImgView(e.target.src)}/>
            <div className='rockcard-text'>
                <h2 className='rockcard-text_name'>{name}</h2>
                <p><b>Origin:</b> {origin}</p>
                <p><b>Obtained At:</b> {obtained_at}</p>
                <div className='rockcard-text_desc'>
                    {desc_arr.map((item, i) => (<p>{item}</p>))}
                </div>
            </div>
        </div>
    )
};

export default RockCard;
