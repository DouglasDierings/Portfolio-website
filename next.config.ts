import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const basePath = "/Portfolio-website";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? basePath : undefined,
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
