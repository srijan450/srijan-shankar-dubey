import styles from "./header.module.scss";
import MenuIcon from "@/utility/Menu-Icon/menuIcon";
import { useState } from "react";

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
            <li style={{ "--i": 1 }}>About</li>
            <li style={{ "--i": 1.2 }}>home</li>
            <li style={{ "--i": 1.4 }}>projects</li>
            <li style={{ "--i": 1.5 }}>connect</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
