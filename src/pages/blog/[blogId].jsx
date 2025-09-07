import { pagesContent } from "../../../constants";
import Link from "next/link";
import classes from "./blogStrona.module.scss";
import Image from "next/image";
import SEO from "@/components/Main/SEO";
import CTA from "@/components/More/CTA";
import parse, { domToReact } from "html-react-parser";

export async function getStaticPaths() {
  const paths = Object.keys(pagesContent).map((key) => ({
    params: { blogId: key },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const pageContent = pagesContent[params.blogId];
  if (!pageContent) return { notFound: true };
  return { props: { pageContent, blogId: params.blogId } };
}

export default function BlogPost({ pageContent, blogId }) {
  const isSpecialImage = [
    "/jak-zabezpieczyc-tapicerke-przed-plamami",
    "/jak-wyczyscic-tapicerke-samochodowa",
    "/jak-dbac-o-skorzana-tapicerke-samochodowa",
    "/uzywamy-profesjonalnych-produktow",
    "/powloka-ceramiczna",
    "/autokosmetyka-i-detailing",
  ].includes("/" + blogId);

  return (
    <>
      <SEO
        title={`${pageContent.title} - KabeTintLeather Blog`}
        description={pageContent.description}
        image={pageContent.dynamicImage || "/images/logo.jpg"}
        url={`https://www.kabetintleather.opole.pl/blog/${blogId}`}
        datePublished={pageContent.date}
        isBlogPost
      />

      <div className={classes.blogPost}>
        <div
          className={`${classes.blogPost__image} ${
            isSpecialImage ? classes.specialImage : ""
          }`}
        >
          <Image
            src={pageContent.dynamicImage}
            alt={pageContent.title}
            width={1200}
            height={600}
            objectFit="cover"
          />
        </div>

        <div className={classes.blogPost__box}>
          <h1>{pageContent.title}</h1>
          <p className={classes.date}>{pageContent.date}</p>

          {pageContent.sections.map((section, idx) => (
            <section key={idx} className={classes.section}>
              <h2>{section.heading}</h2>
              <div className={classes.section__content}>
                {parse(section.content, {
                  replace: (node) => {
                    // Jeśli to element i jego nazwa to 'blockquote'
                    if (node.type === "tag" && node.name === "blockquote") {
                      return (
                        <blockquote className={classes.testimonial}>
                          {domToReact(node.children)}
                        </blockquote>
                      );
                    }
                  },
                })}
              </div>
            </section>
          ))}

          {pageContent.images && (
            <div className={classes.imageGrid}>
              {pageContent.images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`${pageContent.title} ${idx}`}
                  width={800}
                  height={450}
                />
              ))}
            </div>
          )}

          <Link href="/blog" className={classes.backButton}>
            ← Powrót do bloga
          </Link>
        </div>
      </div>

      <CTA />
    </>
  );
}
