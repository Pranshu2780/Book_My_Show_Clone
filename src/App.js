import React from 'react';
import logo from './logo.svg';
import logobms from './logobms.png';
import placeholder from './placeholder.png'
import './App.css';
import Navbar from './Navbar.js';
import Fle from './Fle.js';
import Footer from './Footer'
// import Slider from './Slider.js';
// import Item from './Item'
function App() {
  return (
      <div className="App">

       <Navbar />
      {/* <Slider />  */}

 
      
      <div className="Trend">Trending Searches</div>
       <div className="bod">
       <div className="cont" >
          <div className="bo" >
             <div>Sadak 2</div> 
             <button className="tre-btn" >Movies</button>
             <hr/>
             <div>Tenet</div> 
             <button className="tre-btn" >Movies</button>
             <hr/>
             <div>Life is a Circus(Evening)-25th September</div>
             <button className="tre-btn" >Events</button> 
             <hr/>
             <div>K.G.F. Chapter-2</div> 
             <button className="tre-btn" >Movies</button>
             <hr/>
             <div>Black Panther 3D</div> 
             <button className="tre-btn" >Movies</button>
             <hr/>
             <div>Purukrama (A musical show)</div> 
             <button className="tre-btn" >Events</button>
             <hr/>
             <div>Barkha Ritu</div>
             <button className="tre-btn" >Events</button>
             <hr/>
             <div>Sadak Movies </div> 
             <button className="tre-btn" >Movies</button>
            

          </div>
       </div>

       <div className="contain">
            <div className="boxy">
                  <img src={placeholder} width="100%" height="300px" />
            </div> 
       </div>
   
       <div className="contain">
            <div className="boxy">
                  <img src={placeholder} width="100%" height="300px" />
            </div> 
       </div>
   
       <div className="contain">
            <div className="boxy">
                  <img src={placeholder} width="100%" height="300px" />
            </div> 
       </div>
   
       </div>

       
       <div className="Heading" >Events</div>
       <button className="btn-heading ">View all</button>
       <Fle />

       <div className="Heading" >Plays</div>
       <button className="btn-heading ">View all</button>
       <Fle />

       <div className="Heading" >Sports</div>
       <button className="btn-heading ">View all</button>
       <Fle />

       <div className="Heading" >Activities</div>
       <button className="btn-heading ">View all</button>
       <Fle />
       <Footer/>
    
      </div>   
  );
}

export default App;

