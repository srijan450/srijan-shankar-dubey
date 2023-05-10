import React, { useEffect, useState } from "react";
import styles from "./projectloader.module.scss";
const ProjectLoader = ({ title }) => {
  const [showloader, setshowloader] = useState(true);
  useEffect(() => {
    setshowloader(true);
    const st = setTimeout(() => {
      setshowloader(false);
    }, 1500);
    return () => {
      clearTimeout(st);
    };
  }, [title]);
  return (
    <div
      className={`${styles.container} ${
        !showloader ? styles.containerhide : ""
      }`}
    >
      <div className={`${styles.inner} ${showloader ? styles.show : ""}`}>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProjectLoader;
