import React, { useEffect } from "react";
import styles from "./clock.module.scss";
const Clock = () => {
  useEffect(() => {
    console.log(styles["hand-second"]);
    const secondHand = document.querySelector(`.${styles["hand-second"]}`);
    const minsHand = document.querySelector(`.${styles["hand-minute"]}`);
    const hourHand = document.querySelector(`.${styles["hand-hour"]}`);
    console.log(secondHand);

    const setHand = (hand, timeDegrees) => {
      hand.style.transform = `rotate(${timeDegrees}deg)`;
    };

    const clock = () => {
      const now = new Date();
      const milliseconds = now.getMilliseconds();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hour = now.getHours();
      const secondDegrees =
        (seconds / 60) * 360 + (milliseconds / 1000) * 6 + 84;
      const minutesDegress = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
      const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
      setHand(secondHand, secondDegrees);
      setHand(minsHand, minutesDegress);
      setHand(hourHand, hourDegrees);
    };
    const SI = setInterval(clock, 10);
    clock();
    return () => {
      clearInterval(SI);
    };
  }, []);
  return (
    <div className={styles.clock}>
      <i className={styles.number}>12</i>
      <i className={styles.number}>3</i>
      <i className={styles.number}>6</i>
      <i className={styles.number}>9</i>
      <div className={`${styles.marking} ${styles["marking-one"]}`}></div>
      <div className={`${styles.marking} ${styles["marking-two"]}`}></div>
      <div className={`${styles.marking} ${styles["marking-three"]}`}></div>
      <div className={`${styles.marking} ${styles["marking-four"]}`}></div>
      <div className={styles["inner-circle"]}></div>
      <div className={styles["inner-circle-after"]}></div>
      <div className={`${styles.hand} ${styles["hand-hour"]}`}></div>
      <div className={`${styles.hand} ${styles["hand-minute"]}`}></div>
      <div className={`${styles.hand} ${styles["hand-second"]}`}></div>
    </div>
  );
};

export default Clock;
