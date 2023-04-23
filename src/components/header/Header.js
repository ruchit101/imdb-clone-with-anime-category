import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {   // arrow function
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://static.wixstatic.com/media/2ce193_786fbc0255a948af952f95c664ed22ad~mv2_d_2988_2954_s_4_2.png/v1/fill/w_560,h_552,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ce193_786fbc0255a948af952f95c664ed22ad~mv2_d_2988_2954_s_4_2.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>POPULAR</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>TOP RATED</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>UPCOMING</span></Link>
                <Link to="/anime" style={{textDecoration: "none"}}><span>ANIME</span></Link>
            </div>
        </div>
    )
}

export default Header;

// Traditional function 

// function bob(a) {
//     return a + 100;
//   }

// Arrow Function
//   const bob2 = (a) => a + 100;

// Traditional anonymous function 
// (function (a, b) {
//     return a + b + 100;
//   });
  
// // Arrow function
//   (a, b) => a + b + 100;