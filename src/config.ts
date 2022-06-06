export const version = import.meta.env.VITE_VERSION || "unset_version";
export const sha = import.meta.env.VITE_GIT_SHA || "unset_sha";

export const ghUrl = "https://github.com/johnb8005/personal-website";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  url: ghUrl,
  version: `${ghUrl}/releases/${version}`,
};
