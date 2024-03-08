import { useState } from "react";
import styles from "./header.module.scss";
import MenuIcon from "@/utility/Menu-Icon/menuIcon";
import NavigationButton from "../navigation-buttons";
import Head from "next/head";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hey I am Srijan Shankar Dubey, Frontend Developer, Backend Developer, MERN stack Developer, Full Stack Dveloper, Wordpress Developer, Coder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./avatar.png" />
        <link rel="apple-touch-icon" href="./avatar.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Head>

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
              <NavigationButton
                title={"home"}
                intime={1}
                active={router.asPath === "/"}
              />
              <NavigationButton
                title={"about"}
                intime={1.2}
                active={router.asPath === "/about"}
              />
              <NavigationButton
                title={"skills"}
                intime={1.4}
                active={router.asPath === "/skills"}
              />
              <NavigationButton
                title={"projects"}
                intime={1.6}
                active={router.asPath === "/projects"}
              />
              <NavigationButton
                title={"contact"}
                intime={1.8}
                active={router.asPath === "/contact"}
              />
            </ul>
          </div>
          {/*  Quick Contacts */}
          <div>
            <div className={styles.divider}>
              <span className={styles.span}>Quick contact</span>
            </div>
            <div className={styles.quickContacts}>
              <ul>
                <li>
                  <a href="https://github.com/srijan450" target="_blank">
                    <i class="devicon-github-original"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:srijanshankardubey99@gmail.com">
                    <i class="devicon-google-plain"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/srijan-shankar-dubey-140bb920b/"
                    target="_blank"
                  >
                    <i class="devicon-linkedin-plain"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*  */}
          <p className={styles.copyright}>
            © Srijan Shankar Dubey @ {new Date().getFullYear()}
          </p>
        </nav>
      </div>
    </>
  );
};

export default Header;
