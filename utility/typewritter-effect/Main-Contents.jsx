import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Typewritter.module.scss";
const Typewritter = () => {
  return (
    <div className={styles.text_style}>
      <Typewriter
        options={{
          strings: [
            "Web Developer.",
            "Frontend Developer.",
            "Backend Developer.",
            "Full Stack Developer.",
            "Wordpress Developer.",
            "Freelancer.",
            "Coder.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewritter;
