// Simple two-column footer.
function Footer() {
  return (
    <footer className="site-footer mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6>Links</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#computer-science">Computer Science</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#reports">Reports</a></li>
            </ul>
          </div>

          <div className="col-md-6">
            <h6>Contact Info</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="tel:+11234567890">+1: 123 456 7890</a></li>
              <li><a href="mailto:trm@studentportal.com">trm@studentportal.com</a></li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center mb-0 small">© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;