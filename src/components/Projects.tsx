import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          id="projects"
          eyebrow="Projects"
          title="Highlighted projects"
          description="Academic and personal work showcasing ML, cybersecurity, and operational systems."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="badge">{project.year}</span>
              </div>
              <ul className="timeline-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
