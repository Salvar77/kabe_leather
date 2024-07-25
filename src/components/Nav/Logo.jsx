// components/Nav/Logo.jsx
import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo_true6.png";

const Logo = ({ showLogo }) => {
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  return (
    <div style={logoStyle} className={classes.logo}>
      <Image
        src={logo}
        alt="Logo firmy KaBe Tint&Leather"
        priority
        width={110}
        height={110}
      />
    </div>
  );
};
export default Logo;
