import React from "react";
import '../App.css';   
import img from "../assets/img.png";
 
function About () { 
    return ( 
        <div className="about" id="About">  
         <div className="text">
        <h1>Hi, i'm Monica Baghumyan</h1> 
        <p>Front-End Developer who loves turning creative designs into functional web apps. I focus on writing clean code, building responsive layouts and always exploring new ways to grow as a developer.</p>   
       <a href="https://github.com/Monika755" target="_blank"><button>View My GitHub</button></a>
        </div>  
        <img src={img} alt="Picture of me"/>
        </div>
    )
}  

export default About;
