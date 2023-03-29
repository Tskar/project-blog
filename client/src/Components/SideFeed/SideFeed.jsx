import './sidefeed.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';

function SideFeed () {

    const [ddState, setDDState] = useState(false);

    return(
        <div className='sidefeed'>
            <div className='sidefeed-board'>
                <span className='filter-title'>FILTER BY</span>
                <ul className='filter-options'>
                    <li className='filter-item'>
                        <span>POPULARITY</span>
                    </li>
                    <li className='filter-item'>
                        <span onClick={() => {setDDState(!ddState)}}>
                            CATEGORY
                            <i class="fa-solid fa-caret-down"></i>
                        </span>

                    </li>
                    <li className=''>
                        <ul className={ddState ? 'cat-opt': 'cat-opt-off'}>
                            <li className='filter-item'>Cooking</li>
                            <li className='filter-item'>Coding</li>
                            <li className='filter-item'>Cleaning</li>
                        </ul>

                    </li>
                    <li className='filter-item'>
                        <span>TAGS</span>
                    </li>
    
                </ul>
            </div>
        </div>
    );
}

export default SideFeed;
