const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false,
  },
};

if (process.env.NODE_ENV === "production") {
  // ✅ Tylko production optimizations
  nextConfig.compiler = {
    removeConsole: true,
  };
  nextConfig.compress = true;
}

module.exports = nextConfig;
