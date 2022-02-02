import React, { useState } from 'react';
import './setting.css';

import SideFeed from '../../SideFeed/SideFeed';

import General from './General/General'
import Private from './Private/Private'
import Theme from './Theme/Theme'


function Setting() {

    const [option, setOption] = useState('general');


    return (
        <div className='setting'>
            <div className='setting-div'>
                <h1 className='settingtitle'>Settings</h1>
                <div className='seperater'></div>
                <nav className='settingoptions'>
                    <ul className='uol'>
                        <li>
                            <a href='#'
                                className = {`settingbuttons ${option === 'general' ? "triggered": ''}`}
                                onClick = {() => setOption('general')}>General</a>
                            
                        </li>
                        <li>
                            <a href='#' 
                                className= {`settingbuttons ${option === 'private' ? "triggered": ''}`}
                                onClick={() => setOption('private')}>Private</a>
                        </li>
                        <li>
                            <a href='#' 
                                className= {`settingbuttons ${option === 'theme' ? "triggered": ''}`} 
                                onClick={() => setOption('theme')}>Theme</a>
                        </li>
                    </ul>
                    {console.log(option)}
                </nav>
                <div className='popupwindow'>
                    {option === 'general' && <General />}
                    {option === 'private' && <Private />}
                    {option === 'theme' && <Theme/> }
                </div>
            </div>
            <SideFeed />
        </div>
   )
}

export default Setting;