import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          id="experience"
          eyebrow="Experience"
          title="Professional work"
          description="Selected roles and projects at Publicis Sapient across banking, AI, and cloud-native delivery."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.project}-${item.period}`} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{item.project}</h3>
                  <p className="timeline-role">
                    {item.role} · {item.company}
                  </p>
                </div>
                <div className="timeline-meta">
                  <span className="badge">{item.period}</span>
                  {item.location ? <span className="timeline-location">{item.location}</span> : null}
                </div>
              </div>

              <ul className="timeline-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tag-list">
                {item.tags.map((tag) => (
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
