import React, { useState } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

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
                    <Link className="link" to="/login">LOGIN</Link>
                </span>
            </a>
            <a href='#' className='ddItems'>
                <span>
                <Link className="link" to="/register">REGISTER</Link>
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
                    <Link className="link" to="/setting">SETTING</Link>
                </span>
            </a>
        </div>
    )
}

export default Dropdown;