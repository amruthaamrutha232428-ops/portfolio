 function About() {
  return (
    <section className="about-section" id="about">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="profile-figure">

          <img
            src="/profilepic.jpeg"
            alt="Amrutha - Software Developer"
          />

          <figcaption>
            Amrutha - Software Developer
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I'm a passionate web developer who enjoys
            building efficient, responsive and
            user-friendly websites.
          </p>

          <p>
            I love learning new technologies and
            turning ideas into functional web
            applications.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;
