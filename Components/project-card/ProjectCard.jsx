import React, { useEffect } from "react";
import styles from "./projectCard.module.scss";
const ProjectCard = ({ title, imgURL, ribbon, ribbonitem }) => {
  useEffect(() => {
    const sx = document.querySelectorAll(`.${styles.card}`);
    sx.forEach((item, key) => {
      item.addEventListener("mouseover", () => {
        item.children[1].style = "filter: blur(2px); opacity: 0.8;";
      });
      item.addEventListener("mouseleave", () => {
        item.children[1].style = "filter: blur(0); opacity: 1;";
      });
    });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        {ribbon && <div className={styles.ribbon}>{ribbonitem}</div>}
        <h2>{title}</h2>
        <i></i>
      </div>

      <img src={imgURL} alt="img" />
      <div className={styles.button}>
        <button>View Project</button>
        <button>Show Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
