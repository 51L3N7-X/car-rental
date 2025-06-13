/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
