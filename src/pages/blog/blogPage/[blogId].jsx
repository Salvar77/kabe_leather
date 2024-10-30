import { useRouter } from "next/router";
import { pagesContent } from "../../../../constants";
import Link from "next/link";
import classes from "./BlogPage.module.scss";
import blogFoto from "../../../assets/image/detalShot6.jpg";
import Image from "next/image";

const BlogPost = ({ pageContent }) => {
  const router = useRouter();
  const { blogId } = router.query;

  if (router.isFallback || !pageContent) {
    return <p>Post nie został znaleziony!</p>;
  }

  const dynamicImage = pageContent.images?.[0] || blogFoto;

  return (
    <div className={classes.blogPost}>
      <div className={classes.blogPost__image}>
        <Image src={blogFoto} alt="Blog, dynamiczne zdjęcie pokazowe" />
      </div>

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
                alt={`Blog image ${index + 1}`}
                width={800}
                height={450}
              />
            ))}
          </div>
        )}

        <Link href="/blog-strona" className={classes.backButton}>
          Powrót do bloga
        </Link>
      </div>
    </div>
  );
};

// Generowanie dynamicznych ścieżek na podstawie `pagesContent`
export async function getStaticPaths() {
  const paths = Object.keys(pagesContent).map((key) => ({
    params: { blogId: key },
  }));

  return {
    paths,
    fallback: true,
  };
}

// Pobieranie danych na podstawie `blogId`
export async function getStaticProps({ params }) {
  const pageContent = pagesContent[params.blogId];

  if (!pageContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageContent,
    },
  };
}

export default BlogPost;
