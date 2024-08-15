import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/newLogoLogo.png";

const Logo = ({ showLogo }) => {
  const logoStyle = {
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? "translateY(0)" : "translateY(-20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
  };

  return (
    <div style={logoStyle} className={classes.logo}>
      <Image src={logo} alt="Logo firmy KaBe" priority />
    </div>
  );
};
export default Logo;
