import React from "react";
import '../App.css'; 
const skillsList = [
  { name: "HTML", img: "/html.png" },       
  { name: "CSS", img: "/css.png" }, 
  { name: "Sass", img: "/sass.png" },        
  { name: "JS", img: "/javascript.png" },   
  { name: "React", img: "/react.png" },     
  { name: "GitHub", img: "/github.png" },    
  { name: "Vite", img: "/vite.png" }, 
  { name: "Git", img: "/git.png" },   
]; 

function Skills () { 
    return ( 
        <div className="skills"  id="Skills"> 
            <h1>Skills And Technologies I Use</h1> 
            <div className="imgContainer">
                {skillsList.map((skill, index) => (
                    <div className="skillCard" key={index}>
                        <img src={skill.img} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default Skills;