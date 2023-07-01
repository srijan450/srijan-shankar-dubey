import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import styles from "./About.module.scss";
import RevolvingIcons from "@/utility/RevolvingIcons";
import PageNavigator from "@/Components/page-navigation";
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
        <main className="main">
          <h1 className="heading heading2">I, Me & Myself</h1>
          <div className="row">
            <div className="left">
              <>
                <h1 className="heading">I, Me & Myself</h1>
                <p className="text">
                  I am an innovative and creative web developer from India. I
                  have a serious passion for creating full-fleshed websites and
                  I am utilizing my skills for helping my clients to grow up
                  with rich feel websites.
                  <br /> Pursued B.Tech with an IT branch from IET, Lucknow
                  Uttar Pradesh India.
                </p>

                <p className="text">
                  Well-organized person, problem solver, and independent
                  developer with high attention to detail. Friendly, helpful,
                  meaningful advisor and cheers everyone around.
                </p>
                <p className="text">
                  First freelancing project was a portfolio website for my
                  college senior. So far till now worked on many frontend,
                  full-stack, and wordpress projects.
                </p>
                <p className="text">
                  Interested in whole frontend spectrum, backend spectrum and
                  full-stack application development.
                </p>
                <div className={styles["button-container"]}>
                  <SuperButton text={"contact me"} to={"/contact"} />
                  <SuperButton_A
                    text={"My Resume"}
                    to={"https://bit.ly/srijan_resume"}
                  />
                </div>
              </>
            </div>
            <div className={`right ${styles.right}`}>
              <RevolvingIcons />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
