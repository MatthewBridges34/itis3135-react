import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#f0f0f0", padding: "15px", textAlign: "center" }}>
      <h1>Matthew Bridges | ITIS 3135</h1>

      <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/contract" style={{ margin: "0 10px" }}>Contract</Link>
        <Link to="/introduction-form" style={{ margin: "0 10px" }}>Introduction Form</Link>
        <Link to="/website-evaluations" style={{ margin: "0 10px" }}>Evaluations</Link>
        <Link to="/hobby" style={{ margin: "0 10px" }}>Hobby</Link>
        <Link to="/design" style={{ margin: "0 10px" }}>Design</Link>
      </nav>

      <nav>
        <Link to="/fcc/cards" style={{ margin: "0 8px" }}>Cards</Link>
        <Link to="/fcc/survey" style={{ margin: "0 8px" }}>Survey</Link>
        <Link to="/fcc/gallery" style={{ margin: "0 8px" }}>Gallery</Link>
        <Link to="/fcc/inventory" style={{ margin: "0 8px" }}>Inventory</Link>
        <Link to="/fcc/instructions" style={{ margin: "0 8px" }}>Instructions</Link>
        <Link to="/fcc/documentation" style={{ margin: "0 8px" }}>Documentation</Link>
        <Link to="/fcc/highlight" style={{ margin: "0 8px" }}>Highlight</Link>
      </nav>
    </header>
  );
}