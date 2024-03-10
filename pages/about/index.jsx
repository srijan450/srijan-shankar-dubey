import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import styles from "./About.module.scss";
import RevolvingIcons from "@/utility/RevolvingIcons";
import PageNavigator from "@/Components/page-navigation";
import HyperCube from "@/utility/hyperCube/HyperCube";
const About = () => {
  return (
    <>
      <PageNavigator
        next={"skills"}
        nextLink={"/skills"}
        prev={"home"}
        prevLink={"/"}
      />
      <section className="pages">
        <div className="row">
          <h1 className="heading heading2">I, Me & Myself</h1>
          <div className="left">
            <h1 className="heading">I, Me & Myself</h1>
            <p className="text">
              I am a dynamic and imaginative web developer hailing from India,
              driven by a profound passion for crafting comprehensive websites.
              My primary objective is to leverage my skills to assist clients in
              achieving growth through visually rich and engaging online
              platforms.
            </p>
            <p className="text">
              I earned my B.Tech degree with a focus on Information Technology
              from IET, Lucknow, Uttar Pradesh, India. Known for my meticulous
              organizational skills, adept problem-solving abilities, and
              independence as a developer, I pay meticulous attention to detail.
              Additionally, I am recognized for being a friendly, supportive,
              and insightful advisor, fostering a positive atmosphere.
            </p>
            <p className="text">
              My journey into freelancing commenced with the development of a
              portfolio website for a college senior. Since then, I have
              successfully undertaken numerous projects encompassing frontend,
              full-stack, and WordPress development.
            </p>
            <p className="text">
              I harbor a keen interest in the entire spectrum of frontend and
              backend development, as well as full-stack application
              development. My goal is to contribute to the creation of seamless
              and innovative digital experiences.
            </p>
            <div className={styles["button-container"]}>
              <SuperButton text={"contact me"} to={"/contact"} dir="left" />
              <SuperButton_A
                text={"My Resume"}
                to={"https://bit.ly/srijan_resume"}
              />
            </div>
          </div>
          <div className={`right ${styles.right}`}>
            <div className={styles["right-mb"]}>
              <HyperCube />
            </div>
            <div className={styles["right-lg"]}>
              <RevolvingIcons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
