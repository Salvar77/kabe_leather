import { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ isOpen, toggleNav }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleServices = () => setShowServices((prev) => !prev);

  const handleLinkClick = () => {
    toggleNav();
    setShowServices(false);
  };

  const navClasses = `${classes.nav} ${
    isOpen ? classes.nav__show : classes.nav__instant
  }`;

  const menuItems = [
    { href: "/o-mnie", label: "O mnie" },
    {
      label: "Usługi",
      dropdown: [
        { href: "/uslugi/pranie-tapicerki", label: "Pranie tapicerki" },
        {
          href: "/uslugi/renowacja-i-czyszczenie-skor",
          label: "Renowacja skór",
        },
        { href: "/uslugi/autokosmetyka", label: "Autokosmetyka" },
        { href: "/uslugi/przyciemnianie-szyb", label: "Przyciemnianie szyb" },
        { href: "/uslugi/korekta-lakieru", label: "Korekta lakieru" },
        { href: "/uslugi/folia-ppf-ochrona-lakieru", label: "Folia PPF" },
        {
          href: "/uslugi/powloka-ceramiczna",
          label: "Powłoka ceramiczna",
        },
        {
          href: "/uslugi/polerowanie-reflektorow",
          label: "Polerowanie Reflektorów",
        },
      ],
    },
    { href: "/realizacje", label: "Realizacje" },
    { href: "/blog", label: "Blog" },
    { href: "/referencje", label: "Referencje" },
    { href: "/cennik", label: "Cennik" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <nav className={navClasses}>
        <div className={classes.nav__container}>
          <div className={classes.nav__items}>
            <ul className={classes.menu}>
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  <li
                    key={index}
                    className={`${classes.nav__item} ${classes.menuItem}`}
                  >
                    {isDesktop ? (
                      <div className={classes.desktopDropdown}>
                        <span className={classes.menuItemLabel}>
                          {item.label}
                        </span>
                        <ul className={classes.dropdown}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link href={subItem.href}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <span
                        className={classes.menuItemLabel}
                        onClick={toggleServices}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ) : (
                  <li
                    key={index}
                    onClick={handleLinkClick}
                    className={classes.nav__item}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {!isDesktop && showServices && (
        <div className={classes.fullScreenModal}>
          <button
            className={classes.closeButton}
            onClick={toggleServices}
            aria-label="Zamknij usługi"
          >
            ×
          </button>
          <h3 className={classes.modalTitle}>Usługi :</h3>
          <ul className={classes.servicesList}>
            {menuItems[1].dropdown.map((service, index) => (
              <li key={index}>
                <Link href={service.href} onClick={handleLinkClick}>
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
