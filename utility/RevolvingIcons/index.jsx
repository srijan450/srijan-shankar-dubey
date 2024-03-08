import React from "react";
import styles from "./revolvingIcons.module.scss";
import Head from "next/head";
const RevolvingIcons = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle} style={{ "--total": 14 }}>
          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 1 }}>
            <span className={styles.span}>
              <i className="devicon-php-plain"></i>
            </span>
          </div>
          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 2 }}>
            <span className={styles.span}>
              <i className="devicon-codeigniter-plain"></i>
            </span>
          </div>

          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 3 }}>
            <span className={styles.span}>
              <i className="devicon-python-plain"></i>
            </span>
          </div>
          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 4 }}>
            <span className={styles.span}>
              <i className="devicon-django-plain"></i>
            </span>
          </div>

          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 5 }}>
            <span className={styles.span}>
              <i className="devicon-nodejs-plain"></i>
            </span>
          </div>
          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 6 }}>
            <span className={styles.span}>
              <i className="devicon-express-original"></i>
            </span>
            <span className={styles.span}></span>
          </div>

          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 7 }}>
            <span className={styles.span}>
              <i className="devicon-mongodb-plain"></i>
            </span>
          </div>
          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 8 }}>
            <span className={styles.span}>
              <i className="devicon-postgresql-plain"></i>
            </span>
          </div>

          <div className={`${styles.item} ${styles.glow}`} style={{ "--i": 9 }}>
            <span className={styles.span}>
              <i className="devicon-jquery-plain"></i>
            </span>
          </div>
          <div
            className={`${styles.item} ${styles.glow}`}
            style={{ "--i": 10 }}
          >
            <span className={styles.span}>
              <i className="devicon-wordpress-plain"></i>
            </span>
          </div>
          <div
            className={`${styles.item} ${styles.glow}`}
            style={{ "--i": 11 }}
          >
            <span className={styles.span}>
              <i className="devicon-typescript-plain"></i>
            </span>
          </div>
          <div
            className={`${styles.item} ${styles.glow}`}
            style={{ "--i": 12 }}
          >
            <span className={styles.span}>
              <i className="devicon-sass-original"></i>
            </span>
          </div>
          <div
            className={`${styles.item} ${styles.glow}`}
            style={{ "--i": 13 }}
          >
            <span className={styles.span}>
              <i className="devicon-react-original"></i>
            </span>
          </div>
          <div
            className={`${styles.item} ${styles.glow}`}
            style={{ "--i": 14 }}
          >
            <span className={styles.span}>
              <i className="devicon-nextjs-original"></i>
            </span>
          </div>

          <div className={styles["center-item"]}>
            <img
              src="https://srijan450.github.io/srijan-shankar-dubey/srijan_shankar_dubey.png"
              alt="Srijan Shankar Dubey, Portfolio Website, Frontend Developer, Backend Developer, Full Stack Developer, MERN stack Developer, Coder, Wordpress Developer, Software Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolvingIcons;
