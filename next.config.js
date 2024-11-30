const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect all HTTP and non-www traffic to HTTPS with www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kabetintleather.pl",
          },
        ],
        destination: "https://www.kabetintleather.pl/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "http://www.kabetintleather.pl",
          },
        ],
        destination: "https://www.kabetintleather.pl/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://kabetintleather.pl",
          },
        ],
        destination: "https://www.kabetintleather.pl/:path*",
        permanent: true,
      },

      // Other existing redirects
      {
        source: "/AboutMe/AboutPage",
        destination: "/o-mnie",
        permanent: true,
      },
      {
        source: "/PricingSection/PricingSection",
        destination: "/cennik",
        permanent: true,
      },
      {
        source: "/Realizations/Realizations",
        destination: "/realizacje",
        permanent: true,
      },
      {
        source: "/Realizations/RealizationsPage/:slug*",
        destination: "/realizacje/:slug*",
        permanent: true,
      },
      {
        source: "/kontakt/ContactSide",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/blog/SectionBlog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/referencje/Referency",
        destination: "/referencje",
        permanent: true,
      },
      {
        source: "/blog/blogPage/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/AutomotiveUpholstery/:id",
        destination: "/uslugi/:id",
        permanent: true,
      },
    ];
  },

  async rewrites() {
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

module.exports = withBundleAnalyzer(nextConfig);
