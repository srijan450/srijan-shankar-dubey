import SuperButton from "@/Components/super-buttons/superButtons";
import Typewritter from "@/utility/typewritter-effect/Main-Contents";
import styles from "./Home.module.scss";
import PageNavigator from "@/Components/page-navigation";
import ReactBot from "@/utility/react-bot";
import RevolvingIcons from "@/utility/RevolvingIcons";

const Home = () => {
  return (
    <>
      <PageNavigator
        prev={false}
        prevLink={""}
        next={"Skills"}
        nextLink={"/skills"}
      />
      <section className={`pages ${styles.pages}`}>
        <div className={`row ${styles.row}`}>
          <div className={`left ${styles.left}`}>
            <h1>
              <span
                className={`${styles["split-text"]} ${styles["text-hello"]}`}
              >
                HEY THERE! <span className={styles.hiiIcon}>👋</span> I'm,
              </span>
              <span
                className={`${styles["split-text"]} ${styles["text-name"]}`}
              >
                Srijan Shankar
              </span>
              <span
                className={`${styles["split-text"]} ${styles["text-name"]}`}
              >
                Dubey
              </span>
              <span
                className={`${styles["split-text"]} ${styles["text-about"]}`}
              >
                I'M, a <Typewritter />
              </span>
            </h1>
            <div className={styles["right"]}>
              <RevolvingIcons />
            </div>
            <p
              className={`${styles["split-text"]} ${styles["text-paragraph"]} ${styles["text-paragraph-l1"]}`}
              style={{ color: "white" }}
            >
              Turning ideas into real life products is my calling.
            </p>
            <p
              className={`${styles["split-text"]} ${styles["text-paragraph"]}`}
            >
              Driven by creativity and a passion for crafting robust and
              scalable websites. My focus is on delivering an exceptional user
              experience through well-designed and innovative solutions. Join me
              on this digital journey as we explore the limitless possibilities
              of technology and transform ideas into seamless online
              experiences.
            </p>
            <div className={styles["button-container"]}>
              <SuperButton to={"/contact"} text={"Contact me"} />
              <SuperButton to={"/about"} text={"about me"} />
            </div>
          </div>
        </div>
      </section>
      <video
        className={"background"}
        height="100%"
        width="100%"
        loop
        autoPlay
        muted
      >
        <source
          type="video/mp4"
          src={"https://srijan450.github.io/srijan-shankar-dubey/test.mp4"}
        />
      </video>
    </>
  );
};

export default Home;
