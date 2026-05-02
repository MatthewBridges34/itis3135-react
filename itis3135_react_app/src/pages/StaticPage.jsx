import { staticPages } from './staticContent.js';

export default function StaticPage({ pageKey, fallbackTitle = 'Page' }) {
  const page = staticPages[pageKey];

  if (!page) {
    return (
      <main>
        <h2>{fallbackTitle}</h2>
        <p>This page is not available yet.</p>
      </main>
    );
  }

  return <main dangerouslySetInnerHTML={{ __html: page.html }} />;
}
