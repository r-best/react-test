import React from 'react';
import temp from '../../assets/temp.jpeg'
import { ProjectCard } from '../../components';

import "./projects.css";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const projects = [
    {
        image: temp,
        title: "Tweet Generator",
        desc: [lorem],
        github: "https://github.com/r-best/tweetgen-lambda",
        livelink: "http://tweetgen.bobbybest.dev",
    },
    {
        image: temp,
        title: "Minecraft Auto-Fisher",
        desc: [lorem],
        github: "https://github.com/r-best/MinecraftAutoFisher",
        livelink: null,
    },
    {
        image: temp,
        title: "Arduino Nanoleaf",
        desc: [lorem],
        github: "https://github.com/r-best/NanoleafDIY",
        livelink: null,
    },
    {
        image: temp,
        title: "\"Bobby Experiments with Phonetics\"",
        desc: [lorem],
        github: "https://github.com/r-best/NewWordGenerator",
        livelink: null,
    },
]

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects Page</h1>
            {projects.map((item, i) => (
                <ProjectCard 
                    image={item.image} 
                    title={item.title} 
                    desc_arr={item.desc} 
                    github={item.github} 
                    live={item.livelink} />
            ))}
        </div>
    )
};

export default Projects;
