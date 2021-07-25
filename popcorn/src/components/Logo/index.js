import React from 'react';
import Pop from '../../images/pop-box.png';
import './style.css'

const Logo = () => (
    <div id= "Logo_container">
    <img id= "Pop_logo" src={Pop}/>
    <div className="Logo_title">
      <span className="fast-flicker">P</span>opc<span class="flicker">o</span>rn
    </div>
   </div>
)

    


export default Logo