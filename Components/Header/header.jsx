import styles from "./header.module.scss";
import MenuIcon from "@/utility/Menu-Icon/menuIcon";
import { useState } from "react";
import Link from "next/link";

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
            <li style={{ "--i": 1 }}>
              <Link className={styles["nav-links"]} href={"/"} as={"/"}>
                Home
              </Link>
            </li>
            <li style={{ "--i": 1.2 }}>
              <Link
                className={styles["nav-links"]}
                href={"/about"}
                as={"/about"}
              >
                About
              </Link>
            </li>

            <li style={{ "--i": 1.4 }}>
              <Link className={styles["nav-links"]} href={"/skills"} as={"/skills"}>
                Skills
              </Link>
            </li>
            <li style={{ "--i": 1.6 }}>
              <Link className={styles["nav-links"]} href={"/projects"} as={"/projects"}>
                Projects
              </Link>
            </li>
            <li style={{ "--i": 1.8 }}>
              <Link className={styles["nav-links"]} href={"/contact"} as={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
