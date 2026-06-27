import { profile } from "../data/portfolio";

export function DownloadResumeFab() {
  return (
    <a
      className="fab-resume"
      href={profile.resumePath}
      download={profile.resumeFileName}
      aria-label="Download resume"
    >
      Download Resume
    </a>
  );
}
