function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you for your message!");
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >

      <h2>Get In Touch</h2>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
            required
          />

        </div>

        <button
          id="submit"
          type="submit"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact; 
