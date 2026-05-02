import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>ITIS3135 | Matthew Bridges</h1>

      <nav className="primary-nav" aria-label="Primary navigation">
        <Link to="/">Home</Link> | <Link to="/introduction">Introduction</Link> |{' '}
        <Link to="/contract">Contract</Link> | <Link to="/intro-form">Intro Form</Link> |{' '}
        <Link to="/project-overview">Project Overview</Link> |{' '}
        <Link to="/javascript-certification">JavaScript Certification</Link>
      </nav>

      <nav className="secondary-nav" aria-label="Secondary navigation">
        <Link to="/fcc/cards">Cards</Link> | <Link to="/fcc/survey">Survey</Link> |{' '}
        <Link to="/fcc/gallery">Gallery</Link> | <Link to="/fcc/inventory">Inventory</Link> |{' '}
        <Link to="/fcc/documentation">Documentation</Link> | <Link to="/website-evaluations">Evaluations</Link> |{' '}
        <Link to="/hobby">Hobby</Link> | <Link to="/client-project">Client Project</Link> |{' '}
        <Link to="/review1">Review 1</Link> | <Link to="/review2">Review 2</Link>
      </nav>
    </header>
  );
}
