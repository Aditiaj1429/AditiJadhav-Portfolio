import { skillGroups } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          id="skills"
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies I use across frontend, backend, DevOps, testing, and AI/ML."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-card">
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
