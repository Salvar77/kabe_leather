/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    console.log("Rewrites configuration loaded");
    return [
      {
        source: "/O-Mnie",
        destination: "/AboutMe/AboutPage",
      },
      {
        source: "/Cennik",
        destination: "/PricingSection/PricingSection",
      },
      {
        source: "/Realizacje",
        destination: "/Realizations/Realizations",
      },
      {
        source: "/Realizacje/:slug*",
        destination: "/Realizations/RealizationsPage/:slug*",
      },
      {
        source: "/:id",
        destination: "/AutomotiveUpholstery/:id",
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
