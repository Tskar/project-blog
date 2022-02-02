import React, { useState } from 'react';
import './navbar.css';

function Dropdown() {

    //light/dark theme
    const [theme, setTheme] = useState(false);

    const handleDMode=() => {
        setTheme(!theme)
        console.log(theme)
    }


    return (
        <div className='ddMenu'>
            <a href='#' className='ddItems'>
                <span>
                    LOGIN
                </span>
            </a>
            <a href='#' className='ddItems'>
                <span>
                    REGISTER
                </span>
            </a>
            <a href='#' className='ddItems'>
                <span>
                    DARK MODE
                </span>
                <div>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="toggler" onClick={handleDMode}/>
                    </label>
                </div>
            </a>
            <a href='#' className='ddItems'>
                <span>
                    SETTING
                </span>
            </a>
        </div>
    )
}

export default Dropdown;