import Head from "next/head";

const SEO = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.kabetintleather.pl",
          "name": "Kabe Tint&Leather",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48-881-325-631",
            "contactType": "Customer Support"
          }
        }
      `}</script>
  </Head>
);

export default SEO;
