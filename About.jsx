import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-content">
          I'm Maryam, a passionate computer science student and aspiring full-stack developer.
           I love building web applications that combine aesthetic 
          design with functional code. Currently exploring the world of React.js and modern 
          web technologies, I'm always eager to learn and take on new challenges in software development.
        </p>
        
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-content">
            <p><strong>Bachelor of Technology in Computer Science</strong></p>
            <p>SRM University, Tamil Nadu</p>
            <p>Currently pursuing degree with focus on Data Structures, Algorithms, and Web Technologies</p>
          </div>
        </div>
        
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <ul className="skill-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Backend Development</h4>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JDBC (Java Database Connectivity)</li>
                <li>JSP (JavaServer Pages)</li>
                <li>SQL</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <ul className="skill-list">
                <li>Java</li>
                <li>Python</li>
                <li>C Programming</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
