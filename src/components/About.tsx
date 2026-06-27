import { profile } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          id="about"
          eyebrow="About"
          title="Building scalable, secure, production-ready systems"
          description="Full-stack engineer with hands-on experience across React, Spring Boot, FastAPI, CI/CD, and cloud deployments on AWS and GCP."
        />
        <div className="about-card">
          <p>{profile.summary}</p>
        </div>
      </div>
    </section>
  );
}
