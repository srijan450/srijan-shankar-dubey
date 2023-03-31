import React, { useEffect, useState } from "react";
import styles from "./skillContainer.module.scss";

const SkillMarquee = ({ children }) => {
  const [arr, setarr] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Jquery",
    "SCSS",
    "ReactJS",
    "Bootstrap",
    "Material-Ui",
    "NPM",
    "Yarn",
    "SQL",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Python",
    "Java",
    "PHP",
    "PostgresSQL",
    "CodeIgnitor",
    "React-Native",
    "NextJS",
    "MySQl",
    "CPP",
  ]);

  useEffect(() => {
    const div1 = document.querySelector(`.${styles.div1}`);
    const div2 = document.querySelector(`.${styles.div2}`);
    // const arr = ["HTML","CSS","JavaScript","Jquery","SCSS","ReactJS","Bootstrap", "Material Ui","NPM","Yarn","SQL","NodeJS","ExpressJS","MongoDB","Python","Java","PHP","PostgresSQL","CodeIgnitor","React-Native","NextJS","MySQl","CPP"];
    const render1 = arr.slice(0, 15).map((item) => {
      const sp = document.createElement("span");
      sp.innerHTML = item;
      return sp;
    });

    const render2 = arr.slice(15, 23).map((item) => {
      const sp = document.createElement("span");
      sp.innerHTML = item;
      return sp;
    });

    var SI = setInterval(() => {
      const item = render1.shift();
      render2.unshift(item);
      const item2 = render2.pop();
      render1.push(item2);

      render1.forEach((ele, key) => {
        div1.appendChild(ele);
      });

      render2.forEach((ele, key) => {
        div2.appendChild(ele);
      });
      // if (div2.childNodes.includes(item))
      //   div2.removeChild(item);

      //   div1.removeChild(item2);
    }, 1000);

    return () => {
      clearInterval(SI);
    };
  }, []);
  return (
    <div className={styles["main-container"]}>
      <div className={styles.div1}></div>

      <div className={styles["flex-col"]}>
        <div className={styles.div2}></div>
        <div className={styles.div3}>{children}</div>
      </div>
    </div>
  );
};

export default SkillMarquee;
