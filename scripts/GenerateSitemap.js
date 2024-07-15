const fs = require("fs");
const path = require("path");

// Tutaj zdefiniuj swoje statyczne i dynamiczne ścieżki
const paths = [
  "/",
  "/O-Mnie",
  "/Tapicerka/tapicerka-samochodowa",
  "/Tapicerka/tapicerka-domowa",
  "/Tapicerka/bezinwazyjne-przyciemnianie-szyb",
  "/Tapicerka/pranie-tapicerki-samochodowej", // Nowa ścieżka
  "/Realizacje",
];

const GenerateSitemap = () => {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${paths
        .map((path) => {
          return `
            <url>
              <loc>${`https://www.kabetintleather.pl${path}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.80</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap); // Zapisz sitemapę w folderze public
};

GenerateSitemap();
