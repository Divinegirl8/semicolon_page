import React, { useEffect } from 'react';
import './App.css';
import logo from "./images/semicolon.png";
import watchVideo from "./images/watch.png";
import applyF from "./images/apply.png";
import foreverChildPng from "./images/forever.png";
import jibolaPng from "./images/jibola.png";
import ozPng from "./images/ozfire.png";
import rightArrow from "./images/Arrow right.svg";
import leftArrow from "./images/Arrow left.svg";
import market from "./images/market.png";
import work from "./images/work.png";
import tuition from "./images/tuition.png";
import swit from "./images/swit.png";
import opportunities from "./images/opportunity.png";
import partners from "./images/partners.png";
import nativeDot from "./images/native-dot.png";
import ready from "./images/ready.png";


function App() {
  useEffect(() => {
    const handleScroll = () => {
      var navbar = document.getElementById("navbar");
      var button1 = document.getElementById("button1");
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.style.backgroundColor = "white";
        button1.style.backgroundColor = "rgb(254, 243, 243)";
     
        
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    };

  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav id='navbar'>
          <div className='logo-container'>
            <img src={logo} alt='' />
          </div>
          <div className='ul-container'>
            <ul>
              <li><a href='www.semicolonl'>About Us</a></li>
              <li><a href='w'>SWiT</a></li>
              <li><a href='w'>StartUps</a></li>
              <li><a href='w'>Sponsorship</a></li>
              <li><a href='w'>Blog</a></li>
            </ul>
          </div>
          <div className='buttons-container'>
            <button className='button1' id='button1'>For Companies</button>
            <button className='button2'>Apply Now</button>
          </div>
        </nav>
      </header>
      <div className='image'>
        <h1>Become a <span>Skilled Software Engineer,</span> Without Prior Knowledge.</h1>
        <p>Get the skills and experience you need to become a Software Engineer, in today’s global market.</p>
      
      <ul>
        <li><a href='https://apply.semicolon.africa/' target='_blank'  rel="noreferrer"><img src={applyF} alt='' ></img></a></li>
        <li><a href='w'><img src={watchVideo} alt='' ></img></a></li>
      </ul>
        <h3>What our Natives are saying...</h3>
      </div>

      <div className='native-comment'>
      <div className="slides">
      <a className="next"  href='f' id='arrow'><img src={leftArrow} alt=''></img></a>
      <img src={foreverChildPng} alt='slide1'></img>
      <img src={jibolaPng} alt='slide2'></img>
      <img src={ozPng} alt='slide3'></img>
      <a className="prev" href='w' id='arrow'><img src={rightArrow} alt=''></img></a>
  
    </div>
      </div>

      <div className='third-page'>
        <h3>We Have Got You Covered!</h3>
        <ul>
        <li><img src={market} alt=''></img></li>
        <li><img src={work} alt=''></img></li>
        <li><img src={tuition} alt=''></img></li>
        </ul>
        </div>
        <div className='batch-two'>
          <ul>
            <li className='swit'><img src={swit} alt=''></img>
            <p>Semicolon aims to increase gender balance in technology across Africa. The Semicolon Women in Technology (SWiT) initiative supports opportunities for women in tech through programs, mentorship, and community networks. Read all about it <span><a href="www.">here.</a></span> </p>
            </li>
            <li className='move'><img src={opportunities} alt=''>
              
              </img></li>
            
          </ul>
      </div>

      <div className='partners'>
        <img src={partners} alt=''></img>

      </div>

      <div className='become-native'>
        <img src={nativeDot}  id="img" alt=''></img>
        <img src={ready} alt='' className='img2'></img>
        <button><a href='www.'>Apply Now</a></button>
      </div>

<div className='townCrier'>
  
 <h1>Hear From Our Town Crier</h1>
 <p>Subscribe to our newsletter to stay connected to our activities, get insights and updates on what's happening in our community!</p>
 <ul>
  <form className='inline-form'>
  <li><input type='text' placeholder='Full Name'></input></li>
  <li><input type='text' placeholder='Email Address'></input></li>
  <li><button type='submit'><a href='w'>Subscribe</a></button></li>
  </form>
 </ul>
</div>

      <footer>

      </footer>
    </div>
  );
}

export default App;
