import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo5.png";

const Logo = () => {
  return <Image className={classes.logo} src={logo} alt="Logo Firmy" />;
};
export default Logo;
