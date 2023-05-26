import Clock from "@/utility/clock/clock";
import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import React from "react";
import styles from "./Skills.module.scss";
import Skillset from "@/utility/skill-set-meter/skillset";
import SkillMarquee from "@/utility/skills-left-container/skillsContainer";
import PageNavigator from "@/Components/page-navigation";
const About = () => {
  return (
    <section className={styles.pagee}>
      <PageNavigator
        next={"projects"}
        nextLink={"/projects"}
        prev={"home"}
        prevLink={"/"}
      />
      <div className={styles.scroll}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Skills & Experience</h1>

            <SkillMarquee>
              <div>
                <p className={styles.text}>
                  I am an innovative and creative web developer from India. I
                  have a serious passion for creating full-fleshed websites and
                  I am utilizing my skills for helping my clients to grow up
                  with rich feel websites.
                  <br /> Pursued B.Tech with an IT branch from IET, Lucknow
                  Uttar Pradesh India.
                </p>

                <p className={styles.text}>
                  Well-organized person, problem solver, and independent
                  developer with high attention to detail. Friendly, helpful,
                  meaningful advisor and cheers everyone around.
                </p>
                <p className={styles.text}>
                  First freelancing project was a portfolio website for my
                  college senior. So far till now worked on many frontend,
                  full-stack, and wordpress projects.
                </p>
                <p className={styles.text}>
                  Interested in whole frontend spectrum, backend spectrum and
                  full-stack application development.
                </p>
              </div>
              <div className={styles["button-container"]}>
                <SuperButton text={"contact me"} to={"/contact"} />
                <SuperButton_A
                  text={"My Resume"}
                  to={"https://bit.ly/srijan_resume"}
                />
              </div>
            </SkillMarquee>
          </div>
          <div className={styles.clock}>
            <Skillset />
          </div>
        </div>

        <div className={styles.full}>
          <p className={styles.text}>jkaisjajsjasakoskoakosk</p>
        </div>
      </div>
    </section>
  );
};

export default About;
