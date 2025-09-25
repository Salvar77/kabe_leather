const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Kompresja Gzip
  compress: true,

  // ✅ Ukryj nagłówek Next.js
  poweredByHeader: false,

  // ✅ Optymalizacje kompilatora
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Optymalizacje eksperymentalne
  experimental: {
    optimizeCss: true,
  },

  // ✅ Headers dla lepszego cache'owania
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.optimization = {
      ...config.optimization,
      minimize: true,
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
