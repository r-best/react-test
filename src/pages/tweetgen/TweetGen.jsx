import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { FaRetweet, FaRegComment } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai'
import { ThreeCircles } from 'react-loader-spinner'

import temp from '../../assets/temp.jpeg'

import "./tweetgen.css";

const API_URL = "https://4ucuhsnruzeywczklaobaiv7he0ufczs.lambda-url.us-east-1.on.aws/"
function callTweetGenerator(users, N, M) {
    return new Promise((resolve, reject) => {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                users: users,
                N: N,
                M: M
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.error !== undefined)
                return reject(json.error)
            return resolve(json.tweets)
        })
        .catch(err => {
            console.log(err)
            return reject("Unknown Error")
        })
    })
};

const TweetGen = () => {
    const [tweetsLoading, setTweetsLoading] = useState(false);
    const [generatedTweets, setGeneratedTweets] = useState([]);

    const [n, setN] = useState(2);
    const [m, setM] = useState(10);
    const [users, setUsers] = useState([{username: "", count: 50}]);
    const addUser = () => {
        setUsers([...users, {username: "", count: 50}])
    };
    const removeUser = i => {
        users.splice(i, 1)
        setUsers([...users])
    };
    const updateName = (e, i) => {
        users[i].username = e.target.value
        setUsers([...users])
    };
    const updateNum = (e, i) => {
        users[i].count = e.target.value
        setUsers([...users])
    };

    const generateTweets = () => {
        console.log("Generating Tweets!")
        setTweetsLoading(true)
        setGeneratedTweets([])
        callTweetGenerator(users, n, m)
            .then(
                res => {
                    console.log("GENERATED TWEETS")
                    console.log(res)
                    setGeneratedTweets(res)
                    setTweetsLoading(false)
                },
                err => {
                    console.log("ERROR GENERATING TWEETS")
                    console.log(err)
                    toast(err)
                    setTweetsLoading(false)
                }
            )
        
    };

    return (
        <div className='tweetgen'>
            <h1>Tweet Generator</h1>
            <p>Enter a list of Twitter users and a number of tweets to retrieve for each, and the program will generate a set of new tweets to mimic them</p>
            <div className='tweetgen__props'>
                <div><span>Value of N (model complexity)</span><input type="number" min={2} max={6} value={n} onChange={e => {setN(e.target.value)}} /></div>
                <div><span>Number of Tweets to Generate</span><input type="number" min={1} max={1000} value={m} onChange={e => {setM(e.target.value)}} /></div>
            </div>
            <button className="tweetgen__adduser" onClick={addUser}><FiPlus />Add User</button>
            <div className='tweetgen__users'>
                {users.map((item, i) => (
                    <div key={i} className='tweetgen__users-user'>
                        <button onClick={() => removeUser(i)}><FiTrash2 /></button>
                        <input type="text" placeholder='Screenname' value={item.username} onChange={e => updateName(e, i)} />
                        <input type="number" value={item.count} onChange={e => updateNum(e, i)} />
                    </div>
                ))}
            </div>
            <button onClick={() => {generateTweets()}} disabled={tweetsLoading}>
                {tweetsLoading
                    ? <ThreeCircles height="20" width="20" color={"var(--blue-secondary)"} ariaLabel="Loading Spinner" />
                    : <span>Generate Tweets</span>}
            </button>
            {tweetsLoading
                ? <div className='tweetgen__loading'>
                    <ThreeCircles height="100" width="100" color={"var(--pink-primary)"} ariaLabel="Loading Spinner" />
                </div>
                : <div className='tweetgen__tweets'>
                    {generatedTweets.map((item, i) => (
                        <div key={i} className='tweetgen__tweets-tweet'>
                            <img src={temp} alt='Twitter User Profile Pic'/>
                            <div className='tweetgen__tweets-tweet_content'>
                                <p style={{"fontWeight": "bold"}}>@Username</p>
                                <p>{item}</p>
                                <div className='tweetgen__tweets-tweet_content-icons'>
                                    <FaRegComment />
                                    <FaRetweet />
                                    <AiOutlineHeart />
                                    <RiShareLine />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
};

export default TweetGen;
