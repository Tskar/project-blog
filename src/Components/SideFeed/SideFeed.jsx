import React from 'react';
import './sidefeed.css';

import PostImg from "../images/pups-about-me.jpg"


function Sidefeed() {


    return (
        <div className='sidefeed'>
            <div className='profile-div'>
                <img className="profilepicture" src={PostImg} alt="" />
                <span className='profiletitle'>Sanskar Thapa</span>
            </div>
            <div className='connection-div'>
                <span className='connectiontitle'>Connections</span>
                <div className='connectionprofiles'>
                    <img className="connection feedpicture" src={PostImg} alt="" />
                    <img className="connection feedpicture" src={PostImg} alt="" />
                    <img className="connection feedpicture" src={PostImg} alt="" />
                    <img className="connection feedpicture" src={PostImg} alt="" />
                </div>
            </div>
            <div className='connection-div'>
                <span className='connectiontitle'>History</span>
                <div className='connectionprofiles'>
                    <img className="history feedpicture" src={PostImg} alt="" />
                    <img className="history feedpicture" src={PostImg} alt="" />
                    <img className="history feedpicture" src={PostImg} alt="" />
                    <img className="history feedpicture" src={PostImg} alt="" />
                </div>
            </div>
            <div className='connection-div'>
                <span className='connectiontitle'>Saved</span>
                <div className='connectionprofiles'>
                    <img className="saved feedpicture" src={PostImg} alt="" />
                    <img className="saved feedpicture" src={PostImg} alt="" />
                    <img className="saved feedpicture" src={PostImg} alt="" />
                    <img className="saved feedpicture" src={PostImg} alt="" />
                </div>
            </div>
        
        </div>
    )
}

export default Sidefeed;