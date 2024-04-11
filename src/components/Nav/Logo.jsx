// components/Nav/Logo.jsx
import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo_true6.png";

const Logo = ({ showLogo }) => {
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)", // Zwiększony przesuw dla lepszego efektu
    transition: "opacity 0.5s ease, transform 0.5s ease", // Dodaj przejście bezpośrednio tutaj
  };

  return (
    <div style={logoStyle} className={classes.logoContainer}>
      <Image
        src={logo}
        alt="Logo firmy KaBe Tint&Leather"
        priority
        layout="fixed"
        width={110}
        height={110}
      />
    </div>
  );
};
export default Logo;
