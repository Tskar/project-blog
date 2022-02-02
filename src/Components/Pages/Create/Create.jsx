import React from 'react';
import './create.css';

import Sidefeed from '../../SideFeed/SideFeed';
import PostImg from "../../images/pups-about-me.jpg"


function Post() {


    return (
        <div className='create'>
            <div className='formHolder'>
                <form className='postForm'>
                    <h1 className='postTopic'>PUBLISH YOUR PROJECT</h1>

                    <div className='postBody'>
                        <div className='postFormInfo'>
                            <div>
                                <img className='inputImage' src={PostImg} alt=''></img>
                                <input className='title inputField' type="text" placeholder="Project Title" />
                                <input className='fileInput' type="file" id="fileInput" />
                                <label htmlFor="fileInput">
                                    <i className="addIcon fas fa-plus"></i>
                                </label>
                            </div>
                            <input className='sc inputField' type="text" placeholder="Source code" />
                            <input className='website inputField' type="text" placeholder="Website link" />

                        </div>
                        <div className='postDesc'>
                        <textarea placeholder="Describe your project..." type="text" className="description inputField" />
                        </div>
                    </div>
                    <button className='submitButton'>
                        <span>Upload</span>
                        <i className=" uploadIcon fas fa-upload"></i>
                    </button>
                </form>
            </div>
            <Sidefeed />
        </div>
    )
}

export default Post;