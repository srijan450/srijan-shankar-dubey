import { useEffect } from "react";
import styles from "./menuIcon.module.scss";
const MenuIcon = ({ showNavItems }) => {
  const setHover = (e) => {
    if (e.target.classList.contains(styles.hover) && e.type === "mouseleave")
      e.target.classList.remove(styles.hover);
    else if (
      e.type === "mouseover" ||
      !e.target.classList.contains(styles.hover)
    )
      e.target.classList.add(styles.hover);
  };

  useEffect(() => {
    const arr = [];

    const closeMenu = function (e) {
      if (
        e?.target?.id === "menu-icon" ||
        e?.target?.className.includes("menu-bar-element")
      ) {
        showNavItems((prev) => !prev);
        document.getElementById("menu-icon").classList.toggle(styles.click);
        document.getElementById("page").classList.toggle("page-rotate");
      } else {
        showNavItems(false);
        document.getElementById("menu-icon").classList.remove(styles.click);
        document.getElementById("page").classList.remove("page-rotate");
      }
    };
    document.body.addEventListener("click", closeMenu);

    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  const setClick = (e) => {
    showNavItems((prev) => !prev);
    document.getElementById("menu-icon").classList.toggle(styles.click);
    document.getElementById("page").classList.toggle("page-rotate");
  };

  return (
    <div
      className={styles.menu}
      onMouseOver={setHover}
      onMouseLeave={setHover}
      // onClick={setClick}
      title="Click to open menu"
      id="menu-icon"
    >
      <i className="menu-bar-element"></i>
      <i className="menu-bar-element"></i>
      <i className="menu-bar-element"></i>
    </div>
  );
};

export default MenuIcon;
