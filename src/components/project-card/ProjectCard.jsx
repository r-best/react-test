import React from 'react';
import { MdOpenInNew } from 'react-icons/md'

import "./projectcard.css";

const ProjectCard = ({image, title, desc_arr, status, github, live}) => {
    return (
        <div className='projects__card'>
            <img src={image} className='projects__card-image' alt="Project Thumbnail" />
            <div className='projects__card-text'>
                <h2 className='projects__card-text_title'>{title}</h2>
                <div className='projects__card-text_desc'>
                    {desc_arr.map((item, i) => (<p key={i}>{item}</p>))}
                    <p><b>Status: </b>{status}</p>
                </div>
                <div className='projects__card-text_links'>
                    <a className='global-buttonlink' target="_blank" rel="noreferrer" href={github}>Github<MdOpenInNew /></a>
                    {live!=null && (
                        <a className='global-buttonlink' href={live}>Live Site</a>
                    )}
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
