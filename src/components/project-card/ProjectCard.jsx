import React from 'react';

import "./projectcard.css";

const ProjectCard = ({image, title, desc_arr, github, live}) => {
    return (
        <div className='projects__card'>
            <img src={image} className='projects__card-image' alt="Project Thumbnail" />
            <div className='projects__card-text'>
                <h2 className='projects__card-text_title'>{title}</h2>
                <div className='projects__card-text_desc'>
                    {desc_arr.map((item, i) => (<p>{item}</p>))}
                </div>
                <div className='projects__card-text_links'>
                    <button className='projects__card-text_links-github' target="_blank" rel="noreferrer" href={github}>Github</button>
                    {live!=null && (
                        <button className='projects__card-text_links-live' target="_blank" rel="noreferrer" href={live}>Live Site</button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
