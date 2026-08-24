 function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section className="skills-section" id="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            className="skill-item"
            key={skill}
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;