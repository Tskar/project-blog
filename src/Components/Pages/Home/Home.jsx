import React from 'react';
import './home.css';

import Feed from '../../Feed/Feed';
import SideFeed from '../../SideFeed/SideFeed';


function Home() {


    return (
        <div className='home-div'>
            <Feed />
            <SideFeed />
        </div>
    )
}

export default Home;