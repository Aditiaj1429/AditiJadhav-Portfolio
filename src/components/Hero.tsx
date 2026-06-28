import { profile } from "../data/portfolio";
import { ProfilePhoto } from "./ProfilePhoto";

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <ProfilePhoto size="hero" />
            <div className="hero-photo-ring" aria-hidden="true" />
          </div>
          <div className="hero-badge-stack">
            <span className="hero-chip">AWS / GCP</span>
            <span className="hero-chip">CI/CD</span>
            <span className="hero-chip">AI / ML</span>
          </div>
        </div>

        <div className="hero-content">
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-meta">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>Publicis Sapient</span>
            <span aria-hidden="true">·</span>
            <span>1.6+ years</span>
          </p>
          <p className="hero-summary">{profile.heroSummary}</p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={profile.resumePath}
              download={profile.resumeFileName}
            >
              Download Resume
            </a>
            <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              Email Me
            </a>
          </div>

          <div className="hero-metrics">
            <article>
              <strong>92%</strong>
              <span>ML detection accuracy</span>
            </article>
            <article>
              <strong>4+</strong>
              <span>Enterprise projects</span>
            </article>
            <article>
              <strong>AWS & GCP</strong>
              <span>Production deployments</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
