import React from 'react';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "E-Commerce Web Application",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and shopping cart functionality.",
      technologies: ["React.js", "Node.js", "Express.js", "SQL"],
      icon: "🛒"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "Java-based application using JDBC and JSP for managing student records, attendance, and grades with SQL database.",
      technologies: ["Java", "JDBC", "JSP", "SQL"],
      icon: "📚"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React.js featuring responsive design, modern UI, and coffee-themed aesthetics.",
      technologies: ["React.js", "CSS3", "JavaScript"],
      icon: "💼"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather application that fetches real-time weather data using API integration and displays forecasts.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API"],
      icon: "🌤️"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A productivity app for organizing tasks with features like priority levels, deadlines, and progress tracking.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      icon: "✅"
    },
    {
      id: 6,
      title: "Chatbot Application",
      description: "Object-oriented chatbot built with Python featuring natural conversation flow and response handling.",
      technologies: ["Python", "OOP"],
      icon: "🤖"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">
          Showcasing innovative solutions from web applications to database-driven systems
        </p>
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
