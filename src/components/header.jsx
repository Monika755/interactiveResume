import React from "react"; 
import { useState } from "react";
import '../App.css';   
import About from "./about.jsx";
import Skills from "./skills.jsx"; 
import Projects from "./projects.jsx"; 
import Contact from "./contact.jsx"; 

function Header() { 
const [isOpen, setIsOpen] = useState(false) 

const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <ul>
        <li><a className="active" href="#About">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;