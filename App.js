import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* Home */}
      <section id="home" className="section home">
        <div className="home-content">
          <p>Hello, I'm</p>
          <h1>Shubham Kumar</h1>
          <h2>MCA 2nd Year Student</h2>

          <p>
            I am an MCA student at Galgotias College of Engineering.
            I am passionate about software development, web development
            and problem solving.
          </p>

          <div className="buttons">
            <a href="#about" className="btn">
              About Me
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section">
        <h1 className="section-title">About Me</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Hi, I'm Shubham Kumar 👋</h2>

            <p>
              I am an MCA 2nd year student at Galgotias College
              of Engineering. I am interested in software development,
              web development and Data Structures & Algorithms.
            </p>

            <p>
              I enjoy building applications and learning new
              technologies.
            </p>
          </div>

          <h2 className="education-title">Education</h2>

          <div className="education-container">

            <div className="education-card">
              <span>2025 - Present</span>
              <h3>MCA</h3>
              <p>Master of Computer Applications</p>
              <p>Galgotias College of Engineering</p>
            </div>

            <div className="education-card">
              <span>Completed</span>
              <h3>BCA</h3>
              <p>Bachelor of Computer Applications</p>
            </div>

            <div className="education-card">
              <span>12th</span>
              <h3>Senior Secondary</h3>
              <p>Class 12th</p>
            </div>

            <div className="education-card">
              <span>10th</span>
              <h3>Secondary School</h3>
              <p>Class 10th</p>
            </div>

          </div>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="section">
        <h1 className="section-title">My Skills</h1>

        <div className="skills-container">

          <div className="skill-card">Java</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">Spring Boot</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">Git & GitHub</div>
          <div className="skill-card">Data Structures</div>
          <div className="skill-card">Problem Solving</div>

        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="section contact">
        <h1 className="section-title">Contact Me</h1>

        <p>
          Feel free to contact me for internships,
          jobs, projects and collaborations.
        </p>

        <div className="contact-container">

          <div className="contact-card">
            <h3>Email</h3>
            <p>shubhamkumar200412@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 934109 9830</p>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/your-profile</p>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <p>github.com/your-username</p>
          </div>

        </div>
      </section>
      {/* Footer */}
<footer className="footer">

  <div className="footer-content">

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="social-links">
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/shubham-kumar-0b17a2267/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </div>

    <div className="footer-line"></div>

    <p className="copyright">
      © 2026 Shubham Kumar. All Rights Reserved.
    </p>

  </div>

</footer>
    </>
  );
}

export default App;