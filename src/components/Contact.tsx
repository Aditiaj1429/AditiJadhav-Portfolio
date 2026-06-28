import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect</h2>
          <p className="section-description">
            Open to full-stack, cloud, and AI/ML opportunities. Reach out via email or LinkedIn.
          </p>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="contact-label">Email</span>
            <span>{profile.email}</span>
          </a>

          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-label">LinkedIn</span>
            <span>View profile</span>
          </a>

          <div className="contact-card static">
            <span className="contact-label">Location</span>
            <span>{profile.location}</span>
          </div>

          <footer className="footer">
           <div className="container footer-inner">
             <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
             <a href={profile.resumePath} download={profile.resumeFileName}>
               Download Resume
             </a>
           </div>
         </footer>
        </div>
      </div>
    </section>
  );
}
// import { profile } from "../data/portfolio";

// export function Contact() {
//   return (
//     <section id="contact" className="section contact-section">
//       <div className="container contact-grid">
//         <div>
//           <p className="eyebrow">Contact</p>
//           <h2>Let&apos;s connect</h2>
//           <p className="section-description">
//             Open to full-stack, cloud, and AI/ML opportunities. Reach out via email or LinkedIn.
//           </p>
//         </div>

//         <div className="contact-cards">
//           <a className="contact-card" href={`mailto:${profile.email}`}>
//             <span className="contact-label">Email</span>
//             <span>{profile.email}</span>
//           </a>

//           <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
//             <span className="contact-label">LinkedIn</span>
//             <span>View profile</span>
//           </a>

//           <div className="contact-card static">
//             <span className="contact-label">Location</span>
//             <span>{profile.location}</span>
//           </div>

//           <a className="contact-card" href={profile.resumePath} download={profile.resumeFileName}>
//             <span className="contact-label">Resume</span>
//             <span>Download Resume</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
