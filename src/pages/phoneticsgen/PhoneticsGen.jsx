import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ThreeCircles } from 'react-loader-spinner'

import "./phoneticsgen.css";

import { generateWord } from './PhoneticsGeneratorApi'


const MODELS = [
    "CMUDict"
]

const PhoneticsGen = () => {
    const [loading, setLoading] = useState(false);
    const [generatedWord, setGeneratedWord] = useState(null);
    const [generatedMp3, setGeneratedMp3] = useState(null);

    const [model, setModel] = useState("CMUDict");

    const [n, setN] = useState(2);
    const updateN = (e) => {
        let newN = parseInt(e.target.value);
        if(isNaN(newN) || newN < 2 || newN > 6)
            setN(prev => prev)
        else
            setN(newN)
    }

    const submit = () => {
        console.log("Generating New Word!")
        setLoading(true)
        setGeneratedWord(null)
        setGeneratedMp3(null)
        generateWord(model, n)
            .then(
                res => {
                    console.log("GENERATED WORD")
                    console.log(res)
                    setGeneratedWord(res['word'])
                    setGeneratedMp3(res['mp3'])
                    setLoading(false)
                },
                err => {
                    console.log("ERROR GENERATING WORD")
                    console.log(err)
                    toast(err)
                    setLoading(false)
                }
            )
    };

    return (
        <div className='phonetics'>
            <h1>Phonetic Word Generator</h1>
            <p>Enter a list of Twitter users and a number of tweets to retrieve for each, and the program will generate a set of new tweets to mimic them</p>
            <div className='phonetics__props'>
                <div>
                    <span>Language Model</span>
                    <select name='model-selection' onChange={e => {setModel(e.target.value)}}>
                        {MODELS.map((item, i) => (
                            <option key={i} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div><span>Value of N (model complexity)</span><input type="number" min={2} max={6} value={n} onChange={updateN} /></div>
            </div>
            <button onClick={() => {submit()}} disabled={loading}>
                {loading
                    ? <ThreeCircles height="20" width="20" color={"var(--blue-secondary)"} ariaLabel="Loading Spinner" />
                    : <span>Generate New Word</span>
                }
            </button>
            {loading
                ? <div className='phonetics__loading'>
                    <ThreeCircles height="100" width="100" color={"var(--pink-primary)"} ariaLabel="Loading Spinner" />
                </div>
                : (generatedWord !== null && 
                    <div className='phonetics__word'>
                        <h3>{generatedWord}</h3>
                        <audio controls src={generatedMp3} />
                    </div>
                )
            }
        </div>
    )
};

export default PhoneticsGen;
