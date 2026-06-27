import { useState } from "react";
import { profile } from "../data/portfolio";

type ProfilePhotoProps = {
  size?: "hero" | "nav";
  className?: string;
};

export function ProfilePhoto({ size = "hero", className = "" }: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`profile-photo ${size} ${hasError ? "fallback" : ""} ${className}`.trim()}>
      {!hasError ? (
        <img
          src={profile.photoPath}
          alt={`${profile.name} profile photo`}
          loading="eager"
          onError={() => setHasError(true)}
        />
      ) : null}
      {hasError ? (
        <span className="profile-fallback" aria-hidden="true">
          {profile.initials}
        </span>
      ) : null}
    </div>
  );
}
