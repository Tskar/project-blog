import React from 'react';
import './create.css';

import Sidefeed from '../../SideFeed/SideFeed';


function Create() {


    return (
        <div className='create'>
            <div className='formHolder'>
                <form className='postForm'>
                    <h1 className='postTopic'>PUBLISH YOUR PROJECT</h1>
                    <div className='postBody'>
                        Post Body
                    </div>
                </form>
            </div>
            <Sidefeed />
        </div>
    )
}

export default Create;