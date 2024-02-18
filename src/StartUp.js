import React from 'react';
import logo from "./images/semicolon.png";
import { Link } from 'react-router-dom';

function StartUps(){
  return (
    <div>
      <header>
        <nav id='navbar'>
          <div className='logo-container'>
            <img src={logo} alt='' />
          </div>
          <div className='ul-container'>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">SWiT</Link></li>
              <li><Link to="/startups">StartUps</Link></li>
              <li><Link to="/">Sponsorship</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>
          <div className='buttons-container'>
            <button className='button1' id='button1'>For Companies</button>
            <button className='button2'>Apply Now</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default StartUps;
