import { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen, toggleNav }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navClasses = `${classes.nav} ${isOpen ? classes.nav__show : ""}`;

  return (
    <nav className={navClasses}>
      <div className={classes.nav__container}>
        <div className={classes.nav__items}>
          <ul className={classes.menu}>
            {[
              { href: "/o-mnie", label: "O nas" },
              { href: "/realizacje", label: "Realizacje" },
              { href: "/blog-strona", label: "Blog" },
              { href: "/referencje", label: "Referencje" },
              { href: "/cennik", label: "Cennik" },
              { href: "/kontakt-strona", label: "Kontakt" },
            ].map((item) => (
              <li
                key={item.href}
                onClick={toggleNav}
                className={classes.nav__item}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
