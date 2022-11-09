import React from 'react';
import { arpabet, fishingrod, placeholder, tweetGenThumbnail } from '../../assets'
import { ProjectCard } from '../../components';

import "./projects.css";

const projects = [
    {
        image: tweetGenThumbnail,
        title: "Tweet Generator",
        desc: [
            "Originally built for an NLP class I took in college, I've rehashed this project over the years anytime I wanted to learn a new programming language, and now it finally has a proper home on my website!",
            "Takes in a set of Twitter users and builds a simple N-gram model to generate new tweets based off of what they've posted."
        ],
        status: "Rebuilt and live on AWS Lambda! See below link",
        github: "https://github.com/r-best/tweetgen-lambda",
        livelink: "/tweetgen",
    },
    {
        image: fishingrod,
        title: "Minecraft Auto-Fisher",
        desc: [
            "One of my favorite projects, built for an image processing class in college.",
            "Uses an OCR library to pick out the text of Minecraft's in-game subtitles, and recognize when the phrase \"Fishing bobber splashes\" appears. Automates a simple right click every time it sees that text to allow for infinite automatic fishing."
        ],
        status: "Functioning, documentation needs improvement so others can set it up without issue",
        github: "https://github.com/r-best/MinecraftAutoFisher",
        livelink: null,
    },
    {
        image: "https://github.com/r-best/NanoleafDIY/raw/master/docs/Architecture.png",
        title: "Arduino Nanoleaf",
        desc: [
            "Built on a whim, I wanted to see if I could recreate Nanoleaf panels myself. I used a set of Arduino Nanos (one per panel) and designed a simple serial communication protocol to allow one control node to broadcast color instructions to all the connected nodes.",
            "The control node was an ESP32 controller that broadcast itself on the local WiFi to be picked up by a companion React Native Android app. The app synced up with the control node to read the current state of all the connected panels, and allow the user to set new colors and patterns as desired."
        ],
        status: "Arduinos and ESP32 all communicating and lighting up properly, basic app working and able to control the panels, panel frames 3d printed, never finished final polishing and full assembly (I didn't want to solder)",
        github: "https://github.com/r-best/NanoleafDIY",
        livelink: null,
    },
    {
        image: arpabet,
        title: "\"Bobby Experiments with Phonetics\"",
        desc: [
            "Experimental project inspired by the NieR: Automata soundtrack. The artist, Emi Evans, worked to write lyrics in something she called \"Chaos Language\", her interpretation of what modern languages would sound like thousands of years in the future. I built on my previous NLP experience to write a program that would generate new words that sound similar to an existing language given a dictionary of phonetics.",
            "Using CMU's English pronunciation dataset, I was able to generate some new words that sounded sorta similar to English. The results weren't great in the first version, but I'd like to revisit it and give it some extra polish to see how convincing it can get."
        ],
        status: "Still in original Python script form, needs to be enhanced and potentially refactored into a form that can be put up as a live demo",
        github: "https://github.com/r-best/NewWordGenerator",
        livelink: null,
    },
]

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects Page</h1>
            {projects.map((item, i) => (
                <div key={i}>
                    <ProjectCard 
                        image={item.image} 
                        title={item.title} 
                        desc_arr={item.desc} 
                        status={item.status} 
                        github={item.github} 
                        live={item.livelink} />
                </div>
            ))}
        </div>
    )
};

export default Projects;
