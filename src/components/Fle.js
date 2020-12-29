import React from 'react';
import placeholder from '../images/placeholder.png'
import '../css/App.css';

function Fle(){ 
    return(
        <div>
          <div className="container">
            <div className="box">
               
               <img src={placeholder} width="100%" height="80%" />
               <div className="text">
               <p>Date</p>
               <p> 1 </p>
               </div>
              
            </div>

           <div className="box">
               
               <img src={placeholder} width="100%" height="80%" />
               <div className="text">
               <p>Date</p>
               <p> 1 </p>
               </div>
              
           </div>

           <div className="box">
               
               <img src={placeholder} width="100%" height="80%" />
               <div className="text">
               <p>Date</p>
               <p> 1 </p>
               </div>
              
           </div>

           <div className="box">
               
               <img src={placeholder} width="100%" height="80%" />
               <div className="text">
               <p>Date</p>
               <p> 1 </p>
               </div>
              
           </div>
           
        </div>

     </div>
    );
}

export default Fle;