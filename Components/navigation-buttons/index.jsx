import React from "react";
import styles from "./navigationButtons.module.scss";
import Link from "next/link";
const NavigationButton = ({ intime, title, active }) => {
  return (
    <li
      className={`${styles.button} ${active ? styles.active : ""}`}
      style={{ "--i": intime }}
    >
      <Link href={`/${title==="home"?"":title}`} as={`/${title==="home"?"":title}`} className={styles.span}>
        {title}
      </Link>
    </li>
  );
};

export default NavigationButton;
