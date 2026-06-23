export default function Home() {
  return (
    <main className="site-shell">
      <section className="section section-hero">
        <div className="section-inner hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio foundation</p>
            <h1>Douglas Vinicius Dierings</h1>
            <p className="lead">
              A clean visual base for a modern Java programmer and software
              developer portfolio.
            </p>
            <div className="button-row" aria-label="Portfolio actions preview">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <div className="profile-preview" aria-label="Profile image placeholder">
            <div className="profile-ring">
              <span>DV</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-inner section-grid">
          <div>
            <p className="eyebrow">Base layout</p>
            <h2>Structured sections with consistent spacing</h2>
          </div>
          <div className="surface-panel">
            <p>
              This phase defines the page rhythm, typography, responsive
              containers, button styles, card surfaces, and subtle technical
              details that later sections will reuse.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="projects">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Reusable cards</p>
            <h2>Project card foundation</h2>
          </div>
          <div className="card-grid">
            <article className="project-card">
              <span className="card-year">2026</span>
              <h3>Project title</h3>
              <p>
                Placeholder card styling for future project content, technology
                tags, and external links.
              </p>
              <div className="tag-row" aria-label="Technology tags preview">
                <span>Java</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </article>
            <article className="project-card">
              <span className="card-year">2026</span>
              <h3>Project title</h3>
              <p>
                Cards use light borders, white surfaces, and green accents
                without making the page feel heavy.
              </p>
              <div className="tag-row" aria-label="Technology tags preview">
                <span>TypeScript</span>
                <span>CSS</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-inner contact-band">
          <div>
            <p className="eyebrow">Contact section</p>
            <h2>Simple call-to-action styling</h2>
          </div>
          <a className="button button-primary" href="mailto:example@email.com">
            Email preview
          </a>
        </div>
      </section>
    </main>
  );
}
