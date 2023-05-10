import React, { useEffect } from "react";
import styles from "./projectCard.module.scss";
import SuperButton4 from "../super-button-4";
const ProjectCard = ({
  title,
  imgURL,
  ribbon,
  ribbonitem,
  github,
  website,
}) => {
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
        {website && (
          <SuperButton4 title="view project" property="link" link={website} />
        )}
        {github && (
          <SuperButton4 title="show code" property="link" link={github} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
