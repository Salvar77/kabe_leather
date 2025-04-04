import React from "react";
import classes from "./sekcjaBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../../constants/index";
import { FaRegCalendarAlt } from "react-icons/fa";
import SEO from "@/components/Main/SEO";

const SectionBlog = () => {
  return (
    <div>
      <SEO
        title="Blog - KabeTintLeather Auto Detailing"
        description="Dowiedz się więcej o naszych usługach, takich jak pranie tapicerek, autokosmetyka i przyciemnianie szyb, w sekcji blogowej KabeTintLeather."
        image="https://www.kabetintleather.opole.pl/hero_main.jpg"
        url="https://www.kabetintleather.opole.pl/blog"
        isBlogPost={false}
      />
      <section id="blog" className={classes.blog} aria-labelledby="blog-title">
        <header className={classes.blog__head}>
          <h1 id="blog-title" className={classes.blog__header}>
            Blog
          </h1>
          <p className={classes.blog__text}>
            Dowiedz się więcej o naszych usługach, praniu tapicerek,
            autokosmetyce i przyciemnianiu szyb!
          </p>
        </header>

        <div className={classes.blog__box}>
          {blogPosts.map((post) => (
            <article key={post.id} className={classes.blog__boxItem}>
              <div className={classes.blog__image}>
                <Image
                  src={post.image}
                  alt={`Ilustracja do wpisu na blogu: ${post.title}`}
                  width={400}
                  height={250}
                />
              </div>

              <header>
                <Link
                  href={`/blog/${post.link.split("/").pop()}`}
                  aria-label={`Przeczytaj wpis na blogu: ${post.title}`}
                >
                  <h3>{post.title}</h3>
                </Link>
              </header>

              <span className={classes.blog__date}>
                <FaRegCalendarAlt
                  style={{ marginRight: "5px" }}
                  aria-hidden="true"
                />
                <time dateTime={post.date}>{post.date}</time>
              </span>

              <Link
                href={`/blog/${post.link.split("/").pop()}`}
                className={classes.blog__readMore}
                aria-label={`Przejdź do szczegółów wpisu na blogu: ${post.title}`}
              >
                Zobacz
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionBlog;
