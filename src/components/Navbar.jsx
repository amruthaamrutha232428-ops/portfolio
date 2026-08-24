function Navbar({ theme, toggleTheme }) {
  return (
    <header className="site-header">
      <nav className="navbar">

        <a href="#hero" className="logo">
          AM
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>

      </nav>
    </header>
  );
}

export default Navbar; 
