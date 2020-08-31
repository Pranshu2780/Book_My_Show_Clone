import React from 'react';
import logobms from './logobms.png';

function Navbar(){
return(
   
    <div>
         <header className="App-header">
    <li class="logo">book <img src={logobms.png}/> show</li>
    
    <nav class="fn">
       <li> <a href="#" >Mumbai</a> </li>
       <li> <a href="#" >English</a> </li>
    </nav>
  
    <li> <a> <button> Sign IN </button> </a> </li>
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