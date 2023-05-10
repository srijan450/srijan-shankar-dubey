import { useState } from "react";
import styles from "./header.module.scss";
import MenuIcon from "@/utility/Menu-Icon/menuIcon";
import NavigationButton from "../navigation-buttons";

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <div className={styles["nav-container"]}>
      <nav
        className={`${styles.nav} ${
          showNavItems ? styles["show-nav-animation"] : ""
        }`}
      >
        <MenuIcon showNavItems={setShowNavItems} />
        <div
          className={`${styles["nav-items"]} ${
            showNavItems ? styles["show-items"] : ""
          }`}
        >
          <ul>
            <NavigationButton title={"home"} intime={1} />
            <NavigationButton title={"about"} intime={1.2} />
            <NavigationButton title={"skills"} intime={1.4} />
            <NavigationButton title={"projects"} intime={1.6} />
            <NavigationButton title={"contact"} intime={1.8} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
