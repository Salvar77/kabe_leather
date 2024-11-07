/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    console.log("Rewrites configuration loaded");
    return [
      {
        source: "/o-mnie",
        destination: "/AboutMe/AboutPage",
      },
      {
        source: "/cennik",
        destination: "/PricingSection/PricingSection",
      },
      {
        source: "/realizacje",
        destination: "/Realizations/Realizations",
      },
      {
        source: "/realizacje/:slug*",
        destination: "/Realizations/RealizationsPage/:slug*",
      },
      {
        source: "/kontakt",
        destination: "/kontakt/ContactSide",
      },
      {
        source: "/blog",
        destination: "/blog/SectionBlog",
      },
      {
        source: "/referencje",
        destination: "/referencje/Referency",
      },
      {
        source: "/blog/:slug",
        destination: "/blog/blogPage/:slug",
      },
      {
        source: "/uslugi/:id",
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
