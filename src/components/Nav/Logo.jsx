import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import classes from "./Logo.module.scss";
import logoMain from "../../assets/image/kabelogo_transparent.png";
import logoSubpage from "../../assets/image/kabelogowhite_transparent.png";

const Logo = ({ showLogo }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const isHomePage = router.pathname === "/";

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
      <Image
        src={isMobile && !isHomePage ? logoSubpage : logoMain}
        alt="Kabe Tint&Leather Auto Detailing"
        priority
      />
    </div>
  );
};

export default Logo;
