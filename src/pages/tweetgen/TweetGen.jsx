import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Tooltip } from '@mui/material';

import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { ThreeCircles } from 'react-loader-spinner';
import { RiInformationLine } from 'react-icons/ri';

import placeholder from '../../assets/placeholder.png'

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
    const updateN = (e) => {
        let newN = parseInt(e.target.value);
        if(isNaN(newN) || newN < 2 || newN > 4)
            setN(prev => prev)
        else
            setN(newN)

    }

    const [m, setM] = useState(10);
    const updateM = (e) => {
        let newM = parseInt(e.target.value);
        if(isNaN(newM) || newM < 1 || newM > 1000)
            setM(prev => prev)
        else
            setM(newM)

    }

    const [users, setUsers] = useState([{icon: placeholder, displayname: "", screenname: "", count: 50}]);
    const addUser = () => {
        setUsers([...users, {icon: placeholder, displayname: "", screenname: "", count: 50}])
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
                        for(let i = 0; i < users.length; i++){
                            if(users[i].screenname === screenname) {
                                users[i].icon = placeholder;
                            }
                        }
                        setUsers([...users])
                    }
                )
        }, 1000))
    };
    const updateNum = (e, i) => {
        let newCount = parseInt(e.target.value)
        if(!isNaN(newCount) && newCount >= 1 && newCount <= 500)
            users[i].count = newCount
        setUsers([...users])
    };

    const submit = () => {
        console.log("Generating Tweets!")
        setTweetsLoading(true)
        setGeneratedTweets([])
        for(let i = 0; i < users.length; i++){
            if(users[i].screenname === "" && users.length > 1){
                users.splice(i, 1)
                i--;
            }
        }
        setUsers([...users])
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
                <div className='tweetgen__props-item'>
                    <span>
                        Value of N (model complexity)
                    </span>
                    <div className='tweetgen__props-n'>
                        <input type="number" min={2} max={4} value={n} onChange={updateN} />
                        <Tooltip title={
                            <div className='tooltip'>
                                <p>N represents how many previous symbols the generator uses to determine which symbol should come next.</p>
                                <p>For example, if we were generating words in a sentence, at N=2 we're only looking at the word that came just before, so we might see the word "your", and there are many words that could potentially come after that, so we just choose one at random.</p>
                                <p>But at N=4, we would see the 3 previous words, "how was your". That gives us much more context, now our options for what could come next are things like "trip", "day", etc..</p>
                                <p>So higher values of N give us more context and let us generate more convincing phrases, but also reduce the chances of the generations getting wild.</p>
                            </div>
                        } placement="top" arrow>
                            <div className='tweetgen__props-info'>
                                <RiInformationLine />
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className='tweetgen__props-item'><span>Number of Tweets to Generate</span><input type="number" min={1} max={1000} value={m} onChange={updateM} /></div>
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
