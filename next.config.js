/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/Realizacje",
        destination: "/Realizations/Realizations",
      },
      {
        source: "/Realizacje/:slug*",
        destination: "/Realizations/RealizationsPage/:slug*", // gdzie `slug` to parametr dla danego rodzaju realizacji
      },
      {
        source: "/Tapicerka/:id",
        destination: "/AutomotiveUpholstery/:id",
      },
      {
        source: "/O-Mnie",
        destination: "/AboutMe/AboutPage",
      },
      {
        source: "/Cennik",
        destination: "/PricingSection/PricingSection",
      },
    ];
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
