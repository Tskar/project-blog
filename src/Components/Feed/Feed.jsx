import React from 'react';
import './feed.css';

import FeedPosts from '../FeedPosts/FeedPosts'


function Feed() {


    return (
        <div className='feed'>
                <FeedPosts />
                <FeedPosts />
                <FeedPosts />

        </div>
    )
}

export default Feed;