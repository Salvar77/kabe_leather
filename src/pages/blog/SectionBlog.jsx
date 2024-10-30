import React from "react";
import classes from "./SectionBlog.module.scss";
import Image from "next/image";

import Link from "next/link";
import { blogPosts } from "../../../constants/index";
import { FaRegCalendarAlt } from "react-icons/fa";

const SectionBlog = () => {
  return (
    <section id="blog-strona" className={classes.blog}>
      <div className={classes.blog__head}>
        <h2 className={classes.blog__header}>Blog</h2>
        <p className={classes.blog__text}>
          Dowiedz się więcej o naszych usługach, praniu tapicerek, autokosmetyce
          i przyciemnianiu szyb!
        </p>
      </div>

      <div className={classes.blog__box}>
        {blogPosts.map((post) => (
          <div key={post.id} className={classes.blog__boxItem}>
            <div className={classes.blog__image}>
              <Image src={post.image} alt={post.title} />
            </div>

            {/* Zaktualizowane linki, aby prowadziły do dynamicznych stron */}
            <Link href={`/blog-strona/${post.link.split("/").pop()}`}>
              <h3>{post.title}</h3>
            </Link>

            <span className={classes.blog__date}>
              <FaRegCalendarAlt style={{ marginRight: "5px" }} />
              <time dateTime={post.date}>{post.date}</time>
            </span>

            <Link
              href={`/blog-strona/${post.link.split("/").pop()}`}
              className={classes.blog__readMore}
            >
              Zobacz
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionBlog;
