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
import facebook from "./images/facebook_mbcqyq.png";
import ig from "./images/Instagram-1_m0qmqe.png";
import twitter from "./images/Twitter_yuiqrc.png";
import youtube from "./images/Youtube-1_jvmpwi.png";
import medium from "./images/Medium_rovyld.png";
import tiktok from "./images/TikTok_qjj8bf.png";
import ExpansionPanel from './ExpansionPanel';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import designThinking from "./images/DesignThinking.png";
import site from "./images/site.png";
import data from "./images/dataA.png";
import dataBase from "./images/dataBase.png";
import criticalThinker from "./images/criticalThinking.png";



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
              <li><a href="w">StartUps</a></li>
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

      <Carousel>
      <Carousel.Item>
        <div className="background-slide">
          <div className="image-half" >
          <h2>What you would learn</h2>
          <img src={designThinking} alt=''></img>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="background-slide">
          <div className="image-half2" >
          <h2>What you would learn</h2>
          <img src={site} alt=''></img>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="background-slide">
          <div className="image-half3" >
          <h2>What you would learn</h2>
          <img src={data} alt=''></img>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="background-slide">
          <div className="image-half4" >
          <h2>What you would learn</h2>
          <img src={dataBase} alt=''></img>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="background-slide">
          <div className="image-half5" >
          <h2>What you would learn</h2>
          <img src={criticalThinker} alt=''></img>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>



      <div className='partners'>
        <img src={partners} alt=''></img>

      </div>

      <div className='become-native'>
        <img src={nativeDot}  id="img" alt=''></img>
        <img src={ready} alt='' className='img2'></img>
        <button><a href='www.'>Apply Now</a></button>
      </div>


      <h2 className='frequently'>Frequently Asked Questions</h2>

<div className='select-tag'>
   <ExpansionPanel title="What does Semicolon do?">      
Semicolon addresses the problem of youth unemployment by training software engineers and techpreneurs to enable profitable and inclusive economic growth
      </ExpansionPanel>

      <ExpansionPanel title="How do I become a Native?">
      Apply! Our admission process is rigorous but fun and straightforward. Click the ‘Become a Native’ and fill in your details to begin your application.
      </ExpansionPanel>

      <ExpansionPanel title="How long is Semicolon's training Programme?">
      The program runs for a period of 12 months
      </ExpansionPanel>

      <ExpansionPanel title="How much does the program cost?">
      At the moment, the fee is ₦4,300,000 inclusive of VAT and covers meals, healthcare insurance, learning materials and a laptop.
      </ExpansionPanel>

      <ExpansionPanel title="Can i defer my admission?">
      We would be considerate but you will need to communicate your reasons to the admissions team.
      </ExpansionPanel>

      
      <ExpansionPanel title="What is SWIT and how do I join the programme?">
      SWIT is Semicolon Women in Tech community, aimed at advancing women for tech opportunities through varied programs, mentorship, and community networks. Click <span><a href='w.'>here</a></span>for more details and how to be a part of it.
      </ExpansionPanel>

      <ExpansionPanel title="How can I partner with Semicolon?">
      You can partner with Semicolon in many ways. Click<span><a href='w.'>here</a></span> to read all about it.
      </ExpansionPanel>



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
        <div className='firstLine'>
        <ul>

          <li>
            <h3>About Us</h3>
            <p><a href='w'>Who We Are</a></p>
            <p><a href='w'> Board of Directors</a></p>
            <p><a href='w'> Board of Advisors</a></p> 
          </li>

          <li>
          <h3>What We Do</h3>
            <p><a href='w'> Hire Talent</a></p>
            <p><a href='w'> Corporate Training</a></p> 
            <p><a href='w'>Project Delivery</a></p>
            <p><a href='w'>Partnerships</a></p>
          </li>


          <li>
          <h3>Sponsorship</h3>
            <p><a href='w'>Sponsor a Native</a></p>
            <p><a href='w'> Sponsor a Woman in Tech</a></p>
            <p><a href='w'> Sponsor an Event</a></p> 
          </li>
        </ul>
        </div>


        <div className='secondLine'>
    
        <ul className='ul'>

          <li className='list' id='contact'>
            <h3>Contact Us</h3>
            <p><a href='mailto:info@semicolon.africa'>info@semicolon.africa</a></p>
            <p><a href='tel:+2349060008609'> +234 906 000 8609</a></p>
          </li>

          <li className='list'>
          <h3>Address</h3>
            <p className='address'><a href='https://maps.google.com/?q=312+Herbert+Macaulay+Way,++Sabo,+Yaba,+Lagos,+Nigeria&entry=gmail&source=g'>312 Herbert Macaulay Way, Sabo Yaba, Lagos.</a></p>
          </li>


          <li className='list' id='followUs'>
          <h3>Follow Us</h3>
          <div>
          
          <ul>
            <li><a href='w' target='_blank'><img src={facebook} alt=''></img></a></li>
            <li><a href='w' target='_blank'><img src={ig} alt=''></img></a></li>
            <li><a href='w' target='_blank'> <img src={twitter} alt=''></img></a></li> 
            <li><a href='w' target='_blank'> <img src={youtube} alt=''></img></a></li> 
            <li><a href='w' target='_blank'> <img src={medium} alt=''></img></a></li> 
            <li><a href='w' target='_blank'> <img src={tiktok} alt=''></img></a></li> 
            </ul>
            </div>
          </li>
          </ul>
          
        </div>
       
       <p className='copyright'>Copyright &copy; Semicolon 2024. Built with<span style={{ color: 'red' }}> &#9829; </span>in Lagos</p>
      </footer>
    </div>
  );
}

export default App;
