import React from 'react';

import { FaRetweet, FaRegComment } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai'

import "./tweet.css";

const Tweet = ({image, displayname, screenname, tweet}) => {
    return (
        <div className='tweet'>
            <img src={image} alt='Twitter User Profile Pic'/>
            <div className='tweet__content'>
                <h3 className='tweet__content-displayname'>{displayname}</h3>
                <p className='tweet__content-screenname'>@{screenname}</p>
                <p className='tweet__content-tweet'>{tweet}</p>
                <div className='tweet__content-icons'>
                    <FaRegComment />
                    <FaRetweet />
                    <AiOutlineHeart />
                    <RiShareLine />
                </div>
            </div>
        </div>
    )
};

export default Tweet;
