import classes from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__text}>
          <p className={classes.footer__textInfo}>
            &copy;{currentYear} KaBe Tint&Leather
          </p>
        </div>
        <ul className={classes.footer__icons}>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61554800660887"
              className="fab fa-facebook-f"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/kabe_tintleather/"
              className="fab fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
