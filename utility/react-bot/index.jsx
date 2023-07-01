import styles from "./Reactbot.module.scss";
const ReactBot = () => {
  const buttonOne = (e, n) => {
    const light = document.getElementsByClassName(styles.classuni)[n].style;
    const glow = e.target.style;
    if (glow.opacity === "0") {
      glow.transitionDuration = "0ms";
      glow.opacity = 1;

      light.transitionDuration = "0ms";
      light.opacity = 1;
    } else {
      glow.transitionDuration = "900ms";
      glow.opacity = 0;
      light.transitionDuration = "900ms";
      light.opacity = 0;
    }
  };
  return (
    <>
      <article className={styles.mainContainer}>
        <div className={styles.parent}>
          <div className={styles.test}></div>
          <button
            className={`${styles.button} ${styles.btn} ${styles.btn1}`}
            onClick={(e) => buttonOne(e, 2)}
          >
            <span
              className={styles.span1}
              style={{ opacity: 1, transitionDuration: "0ms" }}
            ></span>
            <span className={styles.span2}></span>
          </button>
          <button
            className={`${styles.button} ${styles.btn} ${styles.btn2}`}
            onClick={(e) => buttonOne(e, 1)}
          >
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
          </button>
          <button
            className={`${styles.button} ${styles.btn} ${styles.btn3}`}
            onClick={(e) => buttonOne(e, 0)}
          >
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
          </button>

          <picture className={styles.picture}>
            <source srcset="./mascot-000.avif" />
            <img
              src="./mascot-000.avif"
              className={`${styles.picture} ${styles.imgs}`}
              style={{
                opacity: 1,
                transitionDuration: "0ms",
                mixBlendMode: "normal",
              }}
            />
          </picture>
          <picture className={styles.picture}>
            <source srcset="./mascot-001.avif" />
            <img
              src="./mascot-001.avif"
              className={`${styles.picture} ${styles.classuni} ${styles.imgs}`}
              style={{
                opacity: 1,
                transitionDuration: "0ms",
                mixBlendMode: "lighten",
              }}
            />
          </picture>
          <picture className={styles.picture}>
            <source srcset="./mascot-010.avif" />
            <img
              src="./mascot-010.avif"
              className={`${styles.picture} ${styles.classuni} ${styles.imgs}`}
              style={{
                opacity: 1,
                transitionDuration: "0ms",
                mixBlendMode: "lighten",
              }}
            />
          </picture>
          <picture className={styles.picture}>
            <source srcset="./mascot-100.avif" />
            <img
              src="./mascot-100.avif"
              className={`${styles.picture} ${styles.classuni} ${styles.imgs}`}
              style={{
                opacity: 1,
                transitionDuration: "0ms",
                mixBlendMode: "lighten",
              }}
            />
          </picture>
        </div>
      </article>
    </>
  );
};

export default ReactBot;
