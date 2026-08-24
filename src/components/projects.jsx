 function Projects() {

  const projects = [
    {
      title: "Weather App",
      description: "Real time weather dashboard",
      image:
        "https://media.istockphoto.com/id/1097573496/photo/dark-clouds-on-blue-sky.jpg?s=612x612&w=0&k=20&c=kL6wEcA7HUzmYxdy9O9mISsHK40XJ0dExUEqeCi0k4A=",
      tags: ["React", "API"],
      demo: "#",
      github: "#"
    },

    {
      title: "Calculator",
      description: "Real time calculation",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3R0RP63LmWnvNLe4AoEKTFocQvNHbDHylc9YyFaZQA&s=10",
      tags: ["React", "JavaScript"],
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section className="project-section" id="projects">

      <h2>My Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.title}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">

              {project.tags.map((tag) => (
                <span
                  className="tag"
                  key={tag}
                >
                  {tag}
                </span>
              ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.demo}
                className="button"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                className="button"
              >
                GitHub
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;