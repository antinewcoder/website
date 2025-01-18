
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

  return (
    <>
      <div>
        <NavigationBar setActiveSection={setActiveSection} />
        {activeSection === 'home' && <Home id="home-section" />}
        {activeSection === 'about' && <About id="about-section" />}
        {activeSection === 'resume' && <Resume id="resume-section" />}
        {activeSection === 'projects' && <Projects id="projects-section" />}
      </div>
    </>
  );
}     

function NavigationBar({ setActiveSection }) {
  return (
    <div id="banner">
      <div id="banner-content">
        <a onClick={() => setActiveSection('home')}>Home</a>
        <a onClick={() => setActiveSection('about')}>About</a>
        <a onClick={() => setActiveSection('resume')}>Resume</a>
        <a onClick={() => setActiveSection('projects')}>Projects</a>
        <a href="https://github.com/antinewcoder" target=" _blank" >Github</a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div id = "background-home">
    <section id="home">
      <div id="titles">
            <h1>Crystal Low</h1>
            <div className="titles">
              <p>Student</p>
              <p>Software Engineer</p>
              <p>Innovator</p>
            </div>
            <div id="social-icons">
              <a href="https://linkedin.com" target="_blank" className="icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:cl4625@columbia.edu" className="icon">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+17185778623" className="icon">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
      </div>
    </section>
    </div>
  );
}


function About() {
  return (
    <div id ="background-about-me">
    <section id="about">
      <h1>About Me</h1>
      <p> I am a current freshman at Columbia University, pursuing a BA in Computer Science. With a passion for policy and a drive to utilize cutting-edge technologies, I aim to develop innovative and inclusive solutions that address inequalities and empower communities.  </p>
    </section>
    <div id="skills">
        <h1>Skills</h1>
        <hr className="separator" />
        <div className="skill">
          <h2>Java</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}></div>
          </div>
          <span className="progress-percentage">80%</span>
        </div>
        <div className="skill">
          <h2>Python</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}></div>
          </div>
          <span className="progress-percentage">70%</span>
          
        </div>
        <div className="skill">
          <h2>Dart</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: "60%" }}></div>
          </div>
          <span className="progress-percentage">60%</span>
        </div>
      </div>
    </div>
  );
  
}

function Resume() {
  return (
    <div id="background-resume">
    <section id="resume">
      <h1>Resume</h1>
      <p>Under Construction. Come back in a year :)</p>
    </section>
    </div>
  );
}

function Projects() {
  return (
    <div id="background-projects">
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <div class="project-box">
  <img src="https://i.pinimg.com/736x/1f/f9/05/1ff9051e266888c8cb580d30274017c0.jpg" alt="Project Image" class="project-image"/>
  <div class="description">
    <h2>Personal Website V1</h2>
    <p>Used HTML, CSS, JavaScript to host my website</p>
  </div>
</div>
    </div>
  );
}

export default App;
