import { useEffect } from "react";

export default function Introduction() {
  useEffect(() => {
    document.title = "Matthew Bridges | ITIS 3135 | Introduction";
  }, []);

  return (
    <section>
      <h2>Introduction</h2>
      <p>This is my introduction page.</p>
    </section>
  );
}