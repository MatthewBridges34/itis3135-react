import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <h3>Personal Links</h3>
      <nav aria-label="Course Links" className="footer-links">
        <a href="https://webpages.charlotte.edu/mbridg34/" target="_blank" rel="noopener noreferrer">Webspace</a> |{' '}
        <a href="https://github.com/MatthewBridges34" target="_blank" rel="noopener noreferrer">GitHub.com</a> |{' '}
        <a href="https://matthewbridges34.github.io/" target="_blank" rel="noopener noreferrer">GitHub.io</a> |{' '}
        <a href="https://matthewbridges34.github.io/itis3135/" target="_blank" rel="noopener noreferrer">Course.io</a> |{' '}
        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> |{' '}
        <a href="https://www.linkedin.com/in/matthew-bridges-998601263/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <p>
        Designed by <Link to="/maliciousbeastdesigns">Malicious Beast Web Design</Link> &copy; 2026
      </p>
      <p className="validate-link">
        <a href="https://validator.w3.org/">HTML Validation</a>{' '}
        <a href="https://jigsaw.w3.org/css-validator/">CSS Validation</a>
      </p>
    </footer>
  );
}
