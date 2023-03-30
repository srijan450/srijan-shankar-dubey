import Bot from "@/Components/EyeBot/Bot";
import SuperButton from "@/utility/super-buttons/superButtons";
import Typewritter from "@/utility/typewritter-effect/Main-Contents";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <video
        className={"background"}
        height="100%"
        width="100%"
        loop
        autoPlay
        muted
      >
        <source type="video/mp4" src={"./black-circle.mp4"} />
      </video>

      <div className={styles.row}>
        <div className={styles.content}>
          <h1>
            <span className={`${styles["split-text"]} ${styles["text-hello"]}`}>
              HEY! THERE 👋 I'M,
            </span>
            <span className={`${styles["split-text"]} ${styles["text-name"]}`}>
              Srijan Shankar
            </span>
            <span className={`${styles["split-text"]} ${styles["text-name"]}`}>
              Dubey
            </span>
            <span className={`${styles["split-text"]} ${styles["text-about"]}`}>
              I'M, a <Typewritter />
            </span>
          </h1>
          <p
            className={`${styles["split-text"]} ${styles["text-paragraph"]} ${styles["text-paragraph-l1"]}`}
            style={{ color: "white" }}
          >
            Turning ideas into real life products is my calling.
          </p>
          <p className={`${styles["split-text"]} ${styles["text-paragraph"]}`}>
            I am an independent creative, IT graduate who likes to craft solid
            and scalable websites with great user experience.
          </p>
          <div className={styles["button-container"]}>
            <SuperButton to={"/contact"} text={"Contact me"} />
            <SuperButton to={"/about"} text={"about me"} />
          </div>
        </div>
        <div className={styles.bot}>
          <Bot />
        </div>
      </div>
    </>
  );
};

export default Home;
