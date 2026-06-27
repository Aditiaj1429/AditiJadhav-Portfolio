import { navLinks, profile } from "../data/portfolio";
import { ProfilePhoto } from "./ProfilePhoto";

type NavbarProps = {
  activeSection: string;
};

export function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo-block">
          <ProfilePhoto size="nav" />
          <span className="logo-text">
            {profile.name.split(" ")[0]}
            <span className="logo-accent">.</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary btn-nav"
          href={profile.resumePath}
          download={profile.resumeFileName}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
