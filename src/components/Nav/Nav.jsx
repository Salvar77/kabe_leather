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
            <li href="#aboutUs">O nas</li>
            <li href="#services">Usługi</li>
            <li href="#">Galeria</li>
            <li href="#">Kontakt</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
