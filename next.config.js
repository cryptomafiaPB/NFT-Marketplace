/**@type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  // domains: ["127.0.0.1:3004"],
  images: {
    domains: ["gateway.pinata.cloud"],
    formats: ["image/webp"],
  },
};
