import "@/styles/globals.scss";
import "hamburgers/dist/hamburgers.min.css";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import { useState, useEffect } from "react";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import ContactBubble from "@/components/More/ContactBubble";
import ContactBar from "@/components/Main/ContactBar";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const windowWidth = window.innerWidth;

      setShowLogo(!(windowWidth < 992 && currentScrollPos > 200));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}'+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
    `
              .replace(/\s+/g, " ")
              .trim(),
          }}
        />
      </Head>
      <header>
        <ContactBar />
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
        <BurgerMenu handleOpen={toggleNav} isOpen={isOpen} />
        <Logo showLogo={showLogo} />
      </header>

      <Component {...pageProps} />
      <Footer />
      <ContactBubble />
    </>
  );
}
