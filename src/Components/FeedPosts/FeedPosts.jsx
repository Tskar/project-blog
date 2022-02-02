import React from 'react';
import './feedposts.css';

import PostImg from "../images/pups-about-me.jpg"


function Feedposts() {


    return (
        <div className='feedposts'>
            <img className="postImage" src={PostImg} alt="" />
            <div className='postbody'>
                <div className='post-interaction'>
                    <i class="starIcon far fa-star"></i>
                    <i class="commentIcon far fa-comment"></i>
                    <span className="postDate">Date posted</span>
                </div>
                <div className='post-title'>
                    <span className='title'>Title</span>
                </div>
                <div className='post-catagories'>
                    <span className="post-catagory">#dog </span>
                    <span className="post-catagory">#pup </span>
                    <span className="post-catagory">#cav </span>
                </div>
            </div>
        </div>
    )
}

export default Feedposts;