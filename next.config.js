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
        source: "/Tapicerka/:id",
        destination: "/AutomotiveUpholstery/:id",
      },
      {
        source: "/O-Mnie",
        destination: "/AboutMe/AboutPage",
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
