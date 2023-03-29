import './navbar.css';
import { Link } from 'react-router-dom';
import Ppic from "../images/pup-p.jpg";

import { useState } from 'react';

function Navbar() {

    const [navbar, setNavbar] = useState(false);

    const changeonScroll = () => {
  
      if(window.scrollY >= 80) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    }

    window.addEventListener('scroll', changeonScroll);

    return(
        <div className={navbar ? 'navbar active': 'navbar' }>

            <ul className={navbar ? 'navbar-list-on' : 'navbar-list'}>
                <li className= "list-items">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className= "list-items">
                    <Link className="link" to="/profile">PROFILE</Link>
                </li>
                <li className= "list-items">
                    <Link className="link" to="/contact">CONTACT</Link>
                </li>
            </ul>
            <div className={navbar ? 'navbar-right narrow' : 'navbar-right'}>
                <div className='nav-item search'>
                    <form className='search-bar'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input className='input-bar' type="text" placeholder='Search a blog' />
                    </form>

                </div>
                <i class="power-off fa-solid fa-power-off"></i>
            </div>

            <div className={navbar ? 'profile-square-off' : 'profile-square-on'}>
                <div class="profile-box">
                    <div class="profile-content">
                        <img className="header-profilepic" src={Ppic} alt=" " />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;