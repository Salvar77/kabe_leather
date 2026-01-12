const nextConfig = {
  reactStrictMode: true,

  // DODAJ TE REDIRECTY (kopiujesz z vercel.json + nowe):
  async redirects() {
    return [
      // Kopiujesz z vercel.json:
      {
        source: "/jak-wyczyscic-tapicerke-samochodowa",
        destination: "/blog/jak-wyczyscic-tapicerke-samochodowa",
        permanent: true,
      },
      {
        source: "/uslugi/renowacja-tapicerki-skorzanej",
        destination: "/uslugi/renowacja-i-czyszczenie-skor",
        permanent: true,
      },
      {
        source: "/uslugi/[automotiveId]",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uslugi/%5BautomotiveId%5D",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/[blogId]",
        destination: "/",
        permanent: true,
      },

      // DODAJ NOWE dla błędów 404:
      {
        source: "/jak-dbac-o-skorzana-tapicerke-samochodowa",
        destination: "/blog/jak-dbac-o-skorzana-tapicerke-samochodowa",
        permanent: true,
      },
    ];
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
