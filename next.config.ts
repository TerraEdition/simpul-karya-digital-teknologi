import type { NextConfig } from "next";

const repositoryName = "simpul-karya-digital-teknologi";
const isProduction = process.env.NODE_ENV === "production";
const githubPagesPrefix = isProduction ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
    output: "export",
    basePath: githubPagesPrefix,
    assetPrefix: githubPagesPrefix ? `${githubPagesPrefix}/` : undefined,
    images: {
        unoptimized: true,
        formats: ["image/avif", "image/webp"]
    }
};
export default nextConfig;
