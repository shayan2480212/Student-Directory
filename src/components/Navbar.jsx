import { useState } from 'react';

// Top navigation bar. Receives onSearch(term) from App.
function Navbar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();       // stop the page from reloading
    onSearch(term);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">StudentPortal</a>

        {/* Mobile hamburger — data-bs-* attributes stay exactly as Bootstrap documents */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link active" href="#students">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
