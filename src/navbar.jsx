function NavigationBar() {
    return (
      <>
        <div id="banner">
          <div id="banner-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="https://github.com/antinewcoder">Github</a>
          </div>
        </div>
  
        <div id="home">
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
        </div>
  
       
      </>
    );
  }
  
  export default NavigationBar;