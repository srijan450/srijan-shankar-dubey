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
      onClick={setClick}
      title="Click to open menu"
      id="menu-icon"
    >
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default MenuIcon;
