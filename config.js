import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
export const ghUrl = "https://github.com/johnb8005/personal-website";
export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  url: ghUrl,
  version: `${ghUrl}/releases/${version}`
};
