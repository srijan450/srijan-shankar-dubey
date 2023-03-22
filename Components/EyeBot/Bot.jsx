import { useEffect } from "react";
import styles from "./Bot.module.scss";
const Bot = () => {
  useEffect(() => {
    const balls = document.getElementsByClassName(styles.balls);
    document.onmousemove = () => {
      const x = (event.clientX * 100) / window.innerWidth + "%";
      const y = (event.clientY * 70) / window.innerHeight + "%";
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x / 2;
        balls[i].style.top = y / 2;
        balls[i].style.transform = "translate(" + x + ", " + y + ")";
      }
    };
  }, []);
  return (
    <div className={styles.bot}>
      <div className={styles.body}>
        <div className={styles.eyes}>
          <div className={styles.eye}>
            <div className={styles.balls}></div>
          </div>
          <div className={styles.eye}>
            <div className={styles.balls}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
