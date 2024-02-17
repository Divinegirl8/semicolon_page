import React, { useEffect } from 'react';
import './App.css';
import logo from "./images/semicolon.png";
import watchVideo from "./images/watch.png";
import applyF from "./images/apply.png";

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
        

      </div>
    </div>
  );
}

export default App;
