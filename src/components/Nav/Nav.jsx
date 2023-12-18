import classes from "./Nav.module.scss";

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
              <a href="#aboutUs">O nas</a>
            </li>
            <li>
              <a href="#services">Usługi</a>
            </li>
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
