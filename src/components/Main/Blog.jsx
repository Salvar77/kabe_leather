"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./Blog.module.scss";
import { blogPosts } from "../../../constants";

const Blog = () => {
  return (
    <section id="blog-główna" className={classes.blog}>
      <h2 className={classes.blog__header}>Odkryj więcej</h2>
      <div className={classes.blog__box}>
        {blogPosts.map((post) => (
          <div key={post.id} className={classes.blog__boxItem}>
            <div className={classes.blog__image}>
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
              />
            </div>

            <Link href={`/blog-strona/${post.link.split("/").pop()}`}>
              <p className={classes.blog__subtitle}>{post.subtitle}</p>
            </Link>

            <Link href={`/blog-strona/${post.link.split("/").pop()}`}>
              <h3>{post.title}</h3>
            </Link>

            <span className={classes.blog__date}>
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <p>{post.description}</p>
            <Link
              href={`/blog-strona/${post.link.split("/").pop()}`}
              className={classes.blog__readMore}
            >
              Czytaj Więcej
            </Link>
          </div>
        ))}
      </div>
      <Link href="/blog-strona" className={classes.readMoreLink}>
        Przeczytaj więcej na blogu
      </Link>
    </section>
  );
};

export default Blog;
