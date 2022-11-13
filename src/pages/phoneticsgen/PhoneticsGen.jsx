import React, { useEffect, useState } from 'react';
import { RiInformationLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { Tooltip } from '@mui/material';

import { ThreeCircles } from 'react-loader-spinner'

import "./phoneticsgen.css";

import { getModels, generateWord } from './PhoneticsGeneratorApi'


const PhoneticsGen = () => {
    const [loadingModels, setLoadingModels] = useState(true);
    const [MODELS, setModels] = useState([{name: "Loading..."}])
    useEffect(() => {
        getModels()
        .then(
            res => {
                console.log("FETCHED LANGUAGE MODELS")
                console.log(res)
                setModels(res)
                setModel(res[0])
                setLoadingModels(false)
            },
            err => {
                console.log("ERROR FETCHING LANGUAGE MODELS")
                console.log(err)
                toast(err)
                let errMsg = [{name: "Error loading available models"}]
                setModels(errMsg)
                setModel(errMsg[0])
                setLoadingModels(false)
            }
        ) // eslint-disable-next-line
    }, []);

    const [loading, setLoading] = useState(false);
    const [generatedWord, setGeneratedWord] = useState(null);
    const [generatedMp3, setGeneratedMp3] = useState(null);

    const [model, setModel] = useState({name: "Loading..."});

    const [n, setN] = useState(3);
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
        generateWord(model.name, n)
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
            <p>Select an available language model and value of N to use, and the program will use examples from the model to generate a brand new word!</p>
            <p>Generated words are presented in International Phonetic Alphabet (IPA) format, which is a way of writing out how to pronounce a word; you might recognize it from Wikipedia, where it's commonly used at the start of an article to let you know how the subject is pronounced.</p>
            <div className='phonetics__props'>
                <div className='phonetics__props-item'>
                    <span style={{ marginRight: '15px' }}>Language Model</span>
                    <div className='phonetics__props-item_row'>
                        <select name='model-selection' onChange={e => {console.log(e.target.value); setModel(e.target.value)}}>
                            {MODELS.map((item, i) => (
                                <option key={i} value={item.name}>{item.name} - {item.language}</option>
                            ))}
                        </select>
                        {loadingModels === false && (
                            <Tooltip title={
                                <div className='tooltip'>
                                    <h3>{model.name} - </h3>
                                    <p>{model.desc}</p>
                                    <p><a href={model.source} target="_blank" rel="noreferrer">[Dataset Link]</a></p>
                                </div>
                            } placement="top" arrow>
                                <div className='phonetics__props-item_info'>
                                    <RiInformationLine />
                                </div>
                            </Tooltip>
                        )}
                    </div>
                </div>
                <div className='phonetics__props-item'>
                    <span>
                        Value of N (model complexity)
                        <Tooltip title={
                            <div className='tooltip'>
                                <p>N represents how many previous symbols the generator uses to determine which symbol should come next.</p>
                                <p>For example, if we were generating words in a sentence, at N=2 we're only looking at the word that came just before, so we might see the word "your", and there are many words that could potentially come after that, so we just choose one at random.</p>
                                <p>But at N=4, we would see the 3 previous words, "how was your". That gives us much more context, now our options for what could come next are things like "trip", "day", etc..</p>
                                <p>So higher values of N give us more context and let us generate more convincing phrases, but also reduce the chances of the generations getting wild.</p>
                            </div>
                        } placement="top" arrow>
                            <div className='phonetics__props-item_info'>
                                <RiInformationLine />
                            </div>
                        </Tooltip>
                    </span>
                    <input type="number" min={2} max={6} value={n} onChange={updateN} />
                </div>
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
                        <p>IPA representation:</p>
                        <h3>{generatedWord}</h3>
                        <audio controls src={generatedMp3} />
                    </div>
                )
            }
        </div>
    )
};

export default PhoneticsGen;
