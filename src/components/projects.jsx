import React from "react";
import calculator from "../projectImg/calculator.png";
import expense from "../projectImg/expense.png";
import todo from "../projectImg/todo.png";
import tetris from "../projectImg/tetris.png"; 
import weather from "../projectImg/weather.png";

const projects = [
  { title: "Calculator", image: calculator, link: "https://monika755.github.io/Calculator/" },
  { title: "To Do App", image: todo, link: "https://monika755.github.io/TO-DO/" },
  { title: "Expense Tracker", image: expense, link: "https://monika755.github.io/tracker/" },
  { title: "Tetris", image: tetris, link: "https://monika755.github.io/tetris/" }, 
  { title: "WeatherApp", image: weather, link: "https://monika755.github.io/WeatherApp/" },
]; 
 
function Projects (){   
    return <> 
    <h1 className="projText">Projects</h1>
    <div className="projectsContainer" id="Projects"> 
  {projects.map((proj, index) => (
    <div key={index} className="projectCard">
      <img src={proj.image} alt={proj.title} />
      <h3>{proj.title}</h3>
      <a href={proj.link} target="_blank" rel="noopener noreferrer">View</a>
    </div>
  ))}
</div></>
}



export default Projects;
