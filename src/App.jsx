import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './navbar'
function App() {
  return (
    <>
      <Navbar/><br/>
      <section id="home" className="home" style={{backgroundColor:"lightgray"}}>
        <h1>Inam Ahmed</h1>
        <h2>Computer Science Student and a web developer</h2><br/>
        <a href="https://github.com/inam432" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          View GitHub Profile </a><br/><br/>
          <a href="www.linkedin.com/in/inam-ahmed-039696340" className="btn btn-primary btn-sm" target="_blank"
           rel="noopener">
          View LinkedIn Profile </a><hr style={{border:"15px solid black"}}></hr>
      </section>
      <section id="about" style={{backgroundColor:"lightgray"}}>
        <h1>About Me</h1>
        <p>I am a hardworking computer science student interested in working as a web developer. 
          Skilled in responsive frontend Development, backend development, version control system (Git) and
           online git repository hosting service (GitHub). Currently looking to work for a company where I 
           can apply my coding skills to gain experience as well as contribute positively for the growth of 
           company.</p>
            <hr style={{border:"20px solid black"}}></hr></section>

      <section id="skills" style={{backgroundColor:"lightgray"}}>
        <h1>Technical Skills</h1>
        <div className='mx-5 text-start'>•	HTML, CSS, Bootstrap, JavaScript, 
        React.js (Responsive Frontend Development)</div>
        <br/><div className='mx-5 text-start'>•	Node.js, Express.js (Backend Development)</div><br/>
        <div className='mx-5 text-start'>•	MongoDB (NoSQL Database), MySQL (SQL Database)</div><br/>
        <div className='mx-5 text-start'>•	Basic Knowledge of Object Oriented Programming</div><br/>
        <div className='mx-5 text-start'>•	Git, GitHub</div><br/>
        <div className='mx-5 text-start'>•	Basic knowledge of Figma (UI/UX Design Tool)</div>
        <hr style={{border:"20px solid black"}}></hr>
      </section>

      <section id="projects" style={{backgroundColor:"lightgray"}}>
        <h1>Projects</h1>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">•	Portfolio Website</h5>
    <p className="card-text">o	Description: Responsive website built to present my personal summary, 
    skills, projects, resume and contact information.<br/>
    o	Technologies: HTML,CSS, JavaScript, Bootstrap, React.js<br/>
o	GitHub: https://github.com/inam432/To_Doer
</p></div></div>
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">•	To Do List Website</h5>
    <p className="card-text">o	Description: Responsive website built to manage tasks efficiently. <br/>
    o	Technologies: HTML,CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB<br/>
o	GitHub: https://github.com/inam432/To-Doer
</p></div></div>
<hr style={{border:"20px solid black"}}></hr>
      </section>

      <section id="resume" style={{backgroundColor:"lightgray"}}>
        <h1>Resume</h1>
        <a href="Inam Ahmed_Resume.pdf" className="btn btn-primary btn-sm" download>
          Download Resume </a><hr style={{border:"20px solid black"}}></hr>
      </section>
       <section id="contact" style={{backgroundColor:"lightgray"}}>
        <h1>Contact</h1>
        <b>Email: inam85813@gmail.com</b><br/>
        <b>Phone: 03462130489</b>
      </section>
    </>
  )
}

export default App
