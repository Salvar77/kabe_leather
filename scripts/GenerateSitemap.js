const fs = require("fs");
const path = require("path");

// Tutaj zdefiniuj swoje statyczne i dynamiczne ścieżki
const paths = ["/", "/AboutUs", "/contact"];

// Generowanie sitemap.xml
const GenerateSitemap = () => {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${paths
        .map((path) => {
          return `
            <url>
              <loc>${`https://www.kabetintleather.pl${path}`}</loc>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap); // Zapisz sitemapę w folderze public
};

GenerateSitemap();
