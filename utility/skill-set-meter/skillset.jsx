import styles from "./skillset.module.scss";
const Skillset = () => {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["chart"]}>
        <span>Front-end</span>
        <div className={styles["footer"]}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "90%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Backend</span>
        <div className={styles["footer"]}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "80%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Coding</span>
        <div className={styles["footer"]}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "70%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Wordpress</span>
        <div className={styles["footer"]}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "60%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
