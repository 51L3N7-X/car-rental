/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
