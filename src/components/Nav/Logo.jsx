import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./Logo.module.scss";
import logoMain from "../../assets/image/150x150white.png";
import logoSubpage from "../../assets/image/150x150black.png";
import Link from "next/link";

const ALT_TEXT =
  "KabeTintLeather Auto Detailing - pranie tapicerki i czyszczenie samochodu";

const Logo = ({ showLogo }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const isHomePage = router.pathname === "/";
  const isAboutPage = router.pathname === "/o-mnie";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  return (
    <div style={logoStyle} className={classes.logo}>
      <Link href="/">
        <Image
          src={isMobile && !isHomePage && !isAboutPage ? logoSubpage : logoMain}
          alt={ALT_TEXT}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
