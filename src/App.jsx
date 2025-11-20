import React from "react";
import './App.css'; 
import Header from "./components/header"; 
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";     
import Contact from "./components/contact";           

export default function App() {
  return (
    <>
      <Header />  
      <About /> 
      <Skills /> 
      <Projects /> 
      <Contact />
    </>
  );
} 

