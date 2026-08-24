function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>

      <p>
        © {year} Amrutha. Built with React.
      </p>

      <nav id="footer">

        <a
          href="https://github.com/amruthaamrutha232428-ops"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer; 
