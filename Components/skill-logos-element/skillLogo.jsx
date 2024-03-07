import React, { lazy } from "react";
import styles from "./skillLogo.module.scss";

const SkillLogo = ({ name }) => {
  const img = lazy(() => import(`../../public/tech-stack-logos/${name}.svg`));
  console.log(img);
  return (
    <div class={styles.skill}>
      <img src={`./tech-stack-logos/${name}.svg`} alt={`${name} logo`} />
    </div>
  );
};

export default SkillLogo;
