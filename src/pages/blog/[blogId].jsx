import { pagesContent } from "../../../constants";
import Link from "next/link";
import classes from "./blogStrona.module.scss";
import Image from "next/image";
import SEO from "@/components/Main/SEO";

const specialImagePages = [
  "/jak-zapobiec-plamom-na-tapicerce-samochodowej",
  "/jak-wyczyscic-tapicerke-samochodowa",
  "/jak-dbac-o-skorzana-tapicerke-samochodowa",
  "/uzywamy-profesjonalnych-produktow",
];

const BlogPost = ({ pageContent, blogId }) => {
  if (!pageContent) {
    return <p>Ładowanie...</p>;
  }

  const isSpecialImage = specialImagePages.includes(`/` + blogId);
  const isLargeImage = pageContent.title.includes("Korekta lakieru");

  return (
    <div>
      <SEO
        title={`${pageContent.title} - Kabe Tint&Leather Blog`}
        description={`Przeczytaj wpis na blogu: ${
          pageContent.title
        }. Dowiedz się więcej o ${
          pageContent.summary ||
          "naszych usługach prania tapicerek i autokosmetyce."
        }`}
        image={
          pageContent.dynamicImage ||
          "https://www.kabetintleather.opole.pl/kabelogooo.webp"
        }
      />
      <div className={classes.blogPost}>
        {pageContent.dynamicImage && (
          <div
            className={`${classes.blogPost__image} ${
              isLargeImage ? classes.largeImage : ""
            } ${isSpecialImage ? classes.specialImage : ""}`}
          >
            <Image
              src={pageContent.dynamicImage}
              alt={`Zdjęcie główne wpisu na blogu: ${pageContent.title} - usługi prania tapicerki i czyszczenia samochodów`}
              objectFit="cover"
            />
          </div>
        )}

        <div className={classes.blogPost__box}>
          <h1>{pageContent.title}</h1>

          {pageContent.sections.map((section, index) => (
            <div key={index} className={classes.section}>
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}

          {pageContent.images && (
            <div className={classes.imageGrid}>
              {pageContent.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Blog image ${
                    index + 1
                  } - pranie tapicerki, czyszczenie samochodów`}
                  width={800}
                  height={450}
                />
              ))}
            </div>
          )}

          <Link
            href="/blog"
            className={classes.backButton}
            aria-label="powrót do bloga"
          >
            Powrót do bloga
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(pagesContent).map((key) => ({
    params: { blogId: key },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const pageContent = pagesContent[params.blogId] || null;

  if (pageContent && !pageContent.dynamicImage) {
    pageContent.dynamicImage = null;
  }

  if (!pageContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageContent,
      blogId: params.blogId,
    },
  };
}

export default BlogPost;