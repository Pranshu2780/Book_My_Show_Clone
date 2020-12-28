import React from 'react';
import logo from './logo.svg';
import logobms from './logobms.png';
import placeholder from './placeholder.png'
import './App.css';
import Navbar from './Navbar.js';
import Fle from './Fle.js';
import Footer from './Footer'
import request from './Request'
import Row from './Row'


function App() {
   return (
      <div className="App">

         <Navbar />

         <div className="Trend">Trending Searches</div>
         <div className="Main_content">
            <div className="cont" >
               <div className="bo" >
                  <div>Sadak 2</div>
                  <button className="tre-btn" >Movies</button>
                  <hr />
                  <div>Tenet</div>
                  <button className="tre-btn" >Movies</button>
                  <hr />
                  <div>Life is a Circus(Evening)-25th September</div>
                  <button className="tre-btn" >Events</button>
                  <hr />
                  <div>K.G.F. Chapter-2</div>
                  <button className="tre-btn" >Movies</button>
                  <hr />
                  <div>Black Panther 3D</div>
                  <button className="tre-btn" >Movies</button>
                  <hr />
                  <div>Purukrama (A musical show)</div>
                  <button className="tre-btn" >Events</button>
                  <hr />
                  <div>Barkha Ritu</div>
                  <button className="tre-btn" >Events</button>
                  <hr />
                  <div>Sadak Movies </div>
                  <button className="tre-btn" >Movies</button>

               </div>
            </div>
            <div className="Row_content">
               <Row title="Trending" getMovie={request.getTrending} />
               <Row title="Top Rated" getMovie={request.getTopRated} />
               <Row title="Action Movies" getMovie={request.getActionMovies} />
               <Row title="Comedy Movies" getMovie={request.getComedyMovies} />
               <Row title="Horror Movies" getMovie={request.getHorrorMovies} />
            </div>
         </div>
         <Footer />

      </div>
   );
}

export default App;