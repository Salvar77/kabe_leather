import classes from "./Logo.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo_true6.png";

const Logo = () => {
  return (
    <Image
      className={classes.logo}
      src={logo}
      alt="Logo Firmy"
      priority
      width={110}
      height={110}
    />
  );
};
export default Logo;
