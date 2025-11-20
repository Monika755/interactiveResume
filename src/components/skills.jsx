import React from "react";
import '../App.css';
 
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import sassImg from '../assets/sass.png';
import jsImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import githubImg from '../assets/github.png';
import viteImg from '../assets/vite.png';
import gitImg from '../assets/git.png';

const skillsList = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "Sass", img: sassImg },
  { name: "JS", img: jsImg },
  { name: "React", img: reactImg },
  { name: "GitHub", img: githubImg },
  { name: "Vite", img: viteImg },
  { name: "Git", img: gitImg },
];

function Skills() {
  return (
    <div className="skills" id="Skills">
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
  );
}

export default Skills;