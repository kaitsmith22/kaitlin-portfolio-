/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/kaitlin-portfolio-",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    distDir: "dist"
  };
  
  module.exports = nextConfig;