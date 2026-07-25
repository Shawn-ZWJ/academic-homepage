import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  assetPrefix: isGitHubPages ? "/academic-homepage/" : undefined,
  basePath: isGitHubPages ? "/academic-homepage" : undefined,
  images: {
    unoptimized: true,
  },
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
