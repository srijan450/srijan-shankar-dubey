import React from "react";
import styles from "./superbutton3.module.scss";

const SuperButton3 = ({ title, active, category, setactivestate }) => {
  const buttonHandler = () => {
    setactivestate({category,title});
  };
  return (
    <li
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={() => buttonHandler()}
    >
      <span>{title}</span>
    </li>
  );
};

export default SuperButton3;
