import React from 'react';

import "./astrocard.css";

const AstroCard = ({imageThumb, imageFull, name, desc_arr}) => {
    return (
        <div className='astrocard'>
            <img src={imageThumb} className='astrocard-image' alt="Rock" onClick={e => window.openFullImgView(imageFull)}/>
            <div className='astrocard-text'>
                <h2 className='astrocard-text_name'>{name}</h2>
                <div className='astrocard-text_desc'>
                    {desc_arr.map((item, i) => (<p>{item}</p>))}
                </div>
            </div>
        </div>
    )
};

export default AstroCard;
