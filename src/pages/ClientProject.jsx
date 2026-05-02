import { Link } from 'react-router-dom';
import { useState } from 'react';

const tips = [
  'Use flower color as a visual clue, but always interpret it within the story context.',
  'A flower at a memorial may communicate grief, honor, or remembrance.',
  'Captions should identify the flower and explain why it matters to the story.',
  'Look at petal shape, leaf pattern, and bloom type when identifying flowers.',
  'Flowers can support tone in photojournalism without replacing factual reporting.'
];

const flowers = [
  { name: 'Rose', img: '/images/rose.jpg', text: 'Roses often suggest love, remembrance, tribute, or public honor.' },
  { name: 'Lily', img: '/images/lily.jpg', text: 'Lilies are associated with peace, mourning, and reflection.' },
  { name: 'Sunflower', img: '/images/sunflower.jpg', text: 'Sunflowers communicate hope, resilience, and warmth.' },
  { name: 'Tulip', img: '/images/tulip.jpg', text: 'Tulips symbolize renewal, seasonal change, and fresh beginnings.' },
  { name: 'Daisy', img: '/images/daisy.jpg', text: 'Daisies suggest simplicity, innocence, and natural beauty.' },
  { name: 'Carnation', img: '/images/carnation.jpg', text: 'Carnations represent gratitude, devotion, and remembrance.' }
];

function ClientNav() {
  return (
    <nav className="client-nav-wrapper" aria-label="Client project navigation">
      <Link to="/client-project">Home</Link> | <Link to="/client-project/identify">Identify</Link> |{' '}
      <Link to="/client-project/meanings">Meanings</Link> | <Link to="/client-project/journalism">Journalism</Link> |{' '}
      <Link to="/client-project/gallery">Gallery</Link>
    </nav>
  );
}

export function ClientHome() {
  const [tip, setTip] = useState('Your flower tip will appear here.');
  return (
    <main className="client-page">
      <ClientNav />
      <section className="intro-section flower-tip-section">
        <h3>Flower Storytelling Tip</h3>
        <p>Click the button below to receive a random flower-related tip for journalism, symbolism, or visual storytelling.</p>
        <button type="button" onClick={() => setTip(tips[Math.floor(Math.random() * tips.length)])}>Show Flower Tip</button>
        <p className="flower-tip-output">{tip}</p>
      </section>
      <section className="landing-hero">
        <div className="hero-overlay">
          <h2>Welcome to Petal Path</h2>
          <p className="hero-subtitle">Explore flowers as a journalistic tool through identification, symbolism, storytelling, and visual reporting.</p>
          <Link className="button-link hero-button" to="/client-project/identify">Start Exploring</Link>
        </div>
      </section>
      <section className="intro-section">
        <h3>What Is Petal Path?</h3>
        <p>Petal Path is a flower-centered client project designed to help users identify flowers and understand how they can communicate emotion, culture, and meaning in journalism.</p>
      </section>
      <section className="intro-section">
        <h3>What You Can Explore</h3>
        <div className="flower-grid">
          <article className="card"><h4>Identify Flowers</h4><p>Learn how to recognize flowers by petals, color, bloom type, stems, and visible traits.</p><Link className="button-link small-button" to="/client-project/identify">Visit Page</Link></article>
          <article className="card"><h4>Flower Meanings</h4><p>Discover how flowers symbolize remembrance, celebration, grief, love, resilience, and renewal.</p><Link className="button-link small-button" to="/client-project/meanings">Visit Page</Link></article>
          <article className="card"><h4>Journalism Uses</h4><p>See how flowers strengthen visual storytelling, captions, and human-interest reporting.</p><Link className="button-link small-button" to="/client-project/journalism">Visit Page</Link></article>
          <article className="card"><h4>Gallery</h4><p>Browse flower images and examples that shape tone and message in a story.</p><Link className="button-link small-button" to="/client-project/gallery">Visit Page</Link></article>
        </div>
      </section>
    </main>
  );
}

export function ClientIdentify() {
  return (
    <main className="client-page"><ClientNav />
      <section className="hero"><h2>Identify Flowers</h2><p>Learn how to recognize common flowers by appearance, structure, and visual details.</p></section>
      <section className="feature-image-section"><img src="/images/identify_flowers.jpg" alt="Different ways to identify flowers" /></section>
      <section><h3>What to Look For</h3><p>Notice petal shape, color, bloom size, leaf shape, stem type, and whether the flower grows alone or in clusters.</p></section>
      <section className="flower-grid">{['Petal Shape','Color','Leaf and Stem','Bloom Pattern'].map((item) => <article className="card" key={item}><h4>{item}</h4><p>Use this visual trait to narrow down the flower type and describe the image accurately.</p></article>)}</section>
    </main>
  );
}

export function ClientMeanings() {
  const [selected, setSelected] = useState(flowers[0]);
  return (
    <main className="client-page"><ClientNav />
      <section className="hero"><h2>Flower Meanings</h2><p>Explore how flowers can communicate symbolism, emotion, and storytelling meaning.</p></section>
      <section className="flower-selector"><h3>Choose a Flower</h3><select value={selected.name} onChange={(e) => setSelected(flowers.find(f => f.name === e.target.value))}>{flowers.map(f => <option key={f.name}>{f.name}</option>)}</select><p className="flower-tip-output">{selected.text}</p></section>
      <section><h3>Why Symbolism Matters</h3><p>Flower meaning depends on context, culture, event type, color, and placement within the story.</p></section>
    </main>
  );
}

export function ClientJournalism() {
  return (
    <main className="client-page"><ClientNav />
      <section className="hero"><h2>Flowers in Journalism</h2><p>Flowers can act as visual evidence, emotional symbols, cultural markers, and descriptive details.</p></section>
      <section className="feature-image-section"><img src="/images/flower_journal.jpg" alt="Flowers used in storytelling contexts" /></section>
      <section><h3>Why Flowers Matter in Reporting</h3><p>A flower left at a memorial, carried at a protest, or placed beside a photograph can communicate meaning without words.</p></section>
      <section className="flower-grid"><article className="card"><h4>Visual Storytelling</h4><p>Flowers can strengthen a photograph or scene description.</p></article><article className="card"><h4>Symbolic Context</h4><p>They can reveal tone, tradition, grief, celebration, and identity.</p></article></section>
    </main>
  );
}

export function ClientGallery() {
  const [preview, setPreview] = useState(null);
  return (
    <main className="client-page"><ClientNav />
      <section className="hero"><h2>Flower Gallery</h2><p>This gallery highlights flowers that support identification, symbolism, and storytelling.</p></section>
      <section><h3>Featured Flower Examples</h3><div className="gallery-grid">{flowers.map(f => <article className="gallery-card" key={f.name}><img className="lightbox-image" src={f.img} alt={f.name} onClick={() => setPreview(f)} /><h4>{f.name}</h4><p>{f.text}</p></article>)}</div></section>
      {preview && <section className="gallery-lightbox"><h3>Image Preview</h3><button type="button" onClick={() => setPreview(null)}>Close Preview</button><img src={preview.img} alt={preview.name} /><p>{preview.name}: {preview.text}</p></section>}
    </main>
  );
}
