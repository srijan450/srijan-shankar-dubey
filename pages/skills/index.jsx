import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import styles from "./Skills.module.scss";
import Skillset from "@/utility/skill-set-meter/skillset";
import SkillMarquee from "@/utility/skills-left-container/skillsContainer";
import PageNavigator from "@/Components/page-navigation";
import SkillLogo from "@/Components/skill-logos-element/skillLogo";
const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "JQuery",
    "React.js",
    "Redux",
    "TypeScript",
    "Next.js",
    "Material-UI",
    "Bootstrap",

    "Node.js",
    "Express.js",
    "PHP",
    "CodeIgniter",
    "Django",

    "PostgresSQL",
    "MySQL",
    "MongoDB",

    "C++",
    "Python",
    "Java",

    "Jira",
    "Confluence",
    "BitBucket",
    "Postman",
    "Slack",
    "Figma",
    "Git",

    "AWS",
  ];
  return (
    <>
      <PageNavigator
        next={"projects"}
        nextLink={"/projects"}
        prev={"home"}
        prevLink={"/"}
      />
      <main className="pages pages-img-background">
        <section className="row">
          <h1 className="heading heading2">Skills & Experience</h1>
          <div className="left">
            <>
              <h1 className="heading">Skills & Experience</h1>
              <SkillMarquee>
                <>
                  <p className="text">
                    I am an innovative and creative web developer from India. I
                    have a serious passion for creating full-fleshed websites
                    and I am utilizing my skills for helping my clients to grow
                    up with rich feel websites.
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
                </>
                <div className={styles["button-container"]}>
                  <SuperButton text={"contact me"} to={"/contact"} />
                  <SuperButton_A
                    text={"My Resume"}
                    to={"https://bit.ly/srijan_resume"}
                  />
                </div>
              </SkillMarquee>
            </>
          </div>

          <div className={`right ${styles.right}`}>
            <Skillset />
          </div>
        </section>

        <section className="row">
          <div className="col">
            <h4 className="heading">Skill-Set</h4>
            {skills.map((item, key) => (
              <SkillLogo key={key} name={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
