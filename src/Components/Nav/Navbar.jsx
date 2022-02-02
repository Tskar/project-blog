import './navbar.css';
import Dropdown from './Dropdown.jsx';
import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';


function Navbar() {

  const [active, setActive] = useState(false)


  return (
    <nav className='navbar'>
      <div className='left'>
        <ul className='left-list'>
          <li className='list-items'>
            HOME
          </li>
          <li className='list-items'>
            CREATE
          </li>
        </ul>
      </div>
      <div className="mid">
        <i className="searchIcon fa-solid fa-magnifying-glass">
        </i>
      </div>
      <div className="right">
        <a href='#' className='ddbutton'>
          <i className='ddIcon fas fa-chevron-circle-down' onClick={() => setActive(!active)}>
          </i>
          {active && <Dropdown />}
        </a>

        <i className="socialIcons fa-brands fa-facebook-square"></i>
        <i className="socialIcons fa-brands fa-instagram-square"></i>
        <i className="socialIcons fa-brands fa-twitter-square"></i>
      </div>
    </nav>

  );
}

export default Navbar;