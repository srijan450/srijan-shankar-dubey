import { useEffect } from "react";
import styles from "./Bot.module.scss";
const Bot = () => {
  useEffect(() => {
    const balls = document.getElementsByClassName(styles.balls);
    const handleMouseMove = () => {
      const x = (event.clientX * 90) / window.innerWidth + "%";
      const y = (event.clientY * 70) / window.innerHeight + "%";
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x / 2;
        balls[i].style.top = y / 2;
        balls[i].style.transform = "translate(" + x + ", " + y + ")";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
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
