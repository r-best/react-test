import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { ThreeCircles } from 'react-loader-spinner'

import temp from '../../assets/temp.jpeg'

import "./tweetgen.css";
import { Tweet } from '../../components';

import { generateTweets, getTwitterUser } from './TwitterApi'

const PREFIXES = [
    "Digital ",
    "Artificial ",
    "(Parody) ",
    "The Cooler ",
    "Robo-",
    "Cyber ",
    "Fake ",
    "THE REAL "
];

const TweetGen = () => {
    const [tweetsLoading, setTweetsLoading] = useState(false);
    const [generatedTweets, setGeneratedTweets] = useState([]);

    const [n, setN] = useState(2);
    const [m, setM] = useState(10);
    const [users, setUsers] = useState([{icon: temp, displayname: "", screenname: "", count: 50}]);
    const addUser = () => {
        setUsers([...users, {icon: temp, displayname: "", screenname: "", count: 50}])
    };
    const removeUser = i => {
        users.splice(i, 1)
        setUsers([...users])
    };

    const [iconTimer, setIconTimer] = useState(null);
    const updateName = (e, i) => {
        let screenname = e.target.value
        if(iconTimer != null)
            clearTimeout(iconTimer)
        users[i].screenname = screenname
        setUsers([...users])
        setIconTimer(setTimeout(() => {
            console.log("Fetching user icon: ", screenname)
            getTwitterUser(screenname)
                .then(
                    res => {
                        console.log("FETCHED ICON")
                        console.log(res)
                        for(let i = 0; i < users.length; i++){
                            if(users[i].screenname === screenname) {
                                users[i].icon = res.icon;
                                users[i].displayname = res.displayname
                            }
                        }
                        setUsers([...users])
                    },
                    err => {
                        console.log("ERROR FETCHING ICON")
                        console.log(err)
                        toast(err)
                    }
                )
        }, 1000))
    };
    const updateNum = (e, i) => {
        users[i].count = e.target.value
        setUsers([...users])
    };

    const submit = () => {
        console.log("Generating Tweets!")
        setTweetsLoading(true)
        setGeneratedTweets([])
        generateTweets(users, n, m)
            .then(
                res => {
                    console.log("GENERATED TWEETS")
                    console.log(res)
                    for(let i = 0; i < res.length; i++){
                        let randomUser = users[Math.floor(Math.random() * users.length)]
                        let prefix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)]
                        res[i] = {
                            userIcon: randomUser.icon,
                            userDisplayName: `${prefix}${randomUser.displayname}`,
                            userScreenName: randomUser.screenname,
                            tweet: res[i]
                        }
                    }
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
                        <img src={item.icon} alt='Twitter User Profile Pic'/>
                        <input type="text" placeholder='@screenname' value={item.screenname} onChange={e => updateName(e, i)} />
                        <input type="number" value={item.count} onChange={e => updateNum(e, i)} />
                        <button onClick={() => removeUser(i)}><FiTrash2 /></button>
                    </div>
                ))}
            </div>
            <button onClick={() => {submit()}} disabled={tweetsLoading}>
                {tweetsLoading
                    ? <ThreeCircles height="20" width="20" color={"var(--blue-secondary)"} ariaLabel="Loading Spinner" />
                    : <span>Generate Tweets</span>
                }
            </button>
            {tweetsLoading
                ? <div className='tweetgen__loading'>
                    <ThreeCircles height="100" width="100" color={"var(--pink-primary)"} ariaLabel="Loading Spinner" />
                </div>
                : <div className='tweetgen__tweets'>
                    {generatedTweets.map((item, i) => (
                        <div key={i}>
                            <Tweet
                                image={item.userIcon}
                                displayname={item.userDisplayName}
                                screenname={item.userScreenName}
                                tweet={item.tweet} />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
};

export default TweetGen;
