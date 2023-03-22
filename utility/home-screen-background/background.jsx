import React from "react";
import styles from "./Background.module.scss";
const Background = () => {
  return (
    <video className={styles.background} controls={false} loop autoPlay muted>
      <source src={"./black-circle.mp4"} type="video/mp4" />
    </video>
  );
};

export default Background;
