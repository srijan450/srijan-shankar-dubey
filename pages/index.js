import SuperButton from "@/Components/super-buttons/superButtons";
import Typewritter from "@/utility/typewritter-effect/Main-Contents";
import styles from "../styles/Home.module.scss";
import PageNavigator from "@/Components/page-navigation";
import ReactBot from "@/utility/react-bot";

const Home = () => {
  return (
    <>
      <PageNavigator
        prev={false}
        prevLink={""}
        next={"about"}
        nextLink={"/about"}
      />
      <video
        className={"background"}
        height="100%"
        width="100%"
        loop
        autoPlay
        muted
      >
        <source type="video/mp4" src={"https://srijan450.github.io/srijan-shankar-dubey/black-circle.mp4"} />
      </video>

      <section className="pages">
        <div className="main">
          <div className="row">
            <div className={"left"}>
              <h1>
                <span
                  className={`${styles["split-text"]} ${styles["text-hello"]}`}
                >
                  HEY! THERE 👋 I'M,
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
              <p
                className={`${styles["split-text"]} ${styles["text-paragraph"]} ${styles["text-paragraph-l1"]}`}
                style={{ color: "white" }}
              >
                Turning ideas into real life products is my calling.
              </p>
              <p
                className={`${styles["split-text"]} ${styles["text-paragraph"]}`}
              >
                I am an independent creative, IT graduate who likes to craft
                solid and scalable websites with great user experience.
              </p>
              <div className={styles["button-container"]}>
                <SuperButton to={"/contact"} text={"Contact me"} />
                <SuperButton to={"/about"} text={"about me"} />
              </div>
            </div>
            <div className={`right ${styles.right}`}>
              <ReactBot />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
