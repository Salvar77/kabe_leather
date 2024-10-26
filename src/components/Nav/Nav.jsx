import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen, toggleNav }) => {
  let navClasses = classes.nav;

  if (isOpen) {
    navClasses = `${classes.nav} ${classes.nav__show}`;
  }

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul aria-hidden="true" className={classes.menu}>
            <li onClick={toggleNav} className={classes.nav__item}>
              <Link href="/o-mnie">O nas</Link>
            </li>

            <li onClick={toggleNav} className={classes.nav__item}>
              <Link href="/realizacje">Realizacje</Link>
            </li>
            <li onClick={toggleNav} className={classes.nav__item}>
              <Link href="/cennik">Cennik</Link>
            </li>
            <li onClick={toggleNav} className={classes.nav__item}>
              <Link href="/blog-strona">Blog</Link>
            </li>
            <li onClick={toggleNav} className={classes.nav__item}>
              <Link href="/kontakt-strona">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
