import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen }) => {
  let navClasses = classes.nav;

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  console.log(navClasses, isOpen);

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden className={classes.menu}>
            <li>
              <Link href="/#aboutUs">O nas</Link>
            </li>
            <li>
              <Link href="/#services">Usługi</Link>
            </li>
            <li>
              <Link href="/#gallery">Galeria</Link>
            </li>
            <li>
              <Link href="/#contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
