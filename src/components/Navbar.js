import React from 'react';
import bmsslogo from '../images/bmsslogo.PNG';

function Navbar() {
  return (

    <div>
      <header className="App-header">
        <li className="logo" > <img src={bmsslogo} width="120px" height="40px" /> </li>

        <input className="sear" type="text" placeholder="Search for Movies,Events,Plays,Sports and Activities" />

        <nav class="fn">
          <li> <a href="#" >Mumbai</a> </li>
          <li> <a href="#" >English</a> </li>
        </nav>

        <li> <a> <button className="sign-btn" > Sign In </button> </a> </li>
      </header>

      <header className="App-header-2">

        <nav>
          <li> <a href="#" >Movies </a> </li>
          <li> <a href="#" >Events</a> </li>
          <li> <a href="#" >Plays</a> </li>
          <li> <a href="#" >Sports</a> </li>
          <li> <a href="#" >Activities</a> </li>
          <li> <a href="#" >Monuments</a> </li>
          <li> <a href="#" >Fanhood</a> </li>
          <li> <a href="#" >Buzz</a> </li>

        </nav>

        <nav>
          <li> <a href="#" >ListYourShow </a> </li>
          <li> <a href="#" >Corporates </a> </li>
          <li> <a href="#" > Offers</a> </li>
          <li> <a href="#" >Gift Cards </a> </li>

        </nav>

      </header>

    </div>

  );
}

export default Navbar;