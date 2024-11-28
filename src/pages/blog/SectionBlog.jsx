import React from "react";
import classes from "./SectionBlog.module.scss";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../../constants/index";
import { FaRegCalendarAlt } from "react-icons/fa";
import SEO from "@/components/Main/SEO";

const SectionBlog = () => {
  return (
    <div>
      <SEO
        title="Blog - Kabe Tint&Leather Auto Detailing"
        description="Dowiedz się więcej o naszych usługach, takich jak pranie tapicerek, autokosmetyka i przyciemnianie szyb, w sekcji blogowej Kabe Tint&Leather."
        image="https://www.kabetintleather.pl/hero_main.jpg"
      />
      <section id="blog" className={classes.blog}>
        <div className={classes.blog__head}>
          <h1 className={classes.blog__header}>Blog</h1>
          <p className={classes.blog__text}>
            Dowiedz się więcej o naszych usługach, praniu tapicerek,
            autokosmetyce i przyciemnianiu szyb!
          </p>
        </div>

        <div className={classes.blog__box}>
          {blogPosts.map((post) => (
            <div key={post.id} className={classes.blog__boxItem}>
              <div className={classes.blog__image}>
                <Image
                  src={post.image}
                  alt={`Post na blogu: ${post.title} - pranie tapicerki, czyszczenie samochodów, przyciemnianie szyb`}
                />
              </div>

              <Link href={`/blog/${post.link.split("/").pop()}`}>
                <h3>{post.title}</h3>
              </Link>

              <span className={classes.blog__date}>
                <FaRegCalendarAlt style={{ marginRight: "5px" }} />
                <time dateTime={post.date}>{post.date}</time>
              </span>

              <Link
                href={`/blog/${post.link.split("/").pop()}`}
                className={classes.blog__readMore}
              >
                Zobacz
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionBlog;
