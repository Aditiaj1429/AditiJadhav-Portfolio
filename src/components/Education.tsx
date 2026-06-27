import { certifications, education } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          id="education"
          eyebrow="Education"
          title="Academic background"
        />

        <div className="education-grid">
          {education.map((item) => (
            <article
              key={item.degree}
              className={item.featured ? "education-card featured" : "education-card"}
            >
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <span className="badge">{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          id="certifications"
          eyebrow="Certifications"
          title="Credentials & programs"
        />

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.name} className="cert-card">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <span className="badge">{cert.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
