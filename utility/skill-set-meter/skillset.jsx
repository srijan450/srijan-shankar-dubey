import styles from "./skillset.module.scss";
const Skillset = () => {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["chart"]}>
        <span>Frontend</span>
        <div className={styles["footer"]} style={{ "--color": "#ffdb4e" }}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "95%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Backend</span>
        <div className={styles["footer"]} style={{ "--color": "#00fe9b" }}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "85%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Coding</span>
        <div className={styles["footer"]} style={{ "--color": "#2dd9fe" }}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "75%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Database</span>
        <div className={styles["footer"]} style={{ "--color": "#FF53cd" }}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "65%" }}
          ></div>
        </div>
      </div>

      <div className={styles["chart"]}>
        <span>Wordpress</span>
        <div className={styles["footer"]} style={{ "--color": "#FF5161" }}>
          <div
            className={styles["footer-highlight"]}
            style={{ "--width": "55%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
