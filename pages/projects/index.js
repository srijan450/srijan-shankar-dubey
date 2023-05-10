import React, { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import SuperButton3 from "@/Components/super-button-3/SuperButton3";
import ProjectCard from "@/Components/project-card/ProjectCard";
import data from "../../data.json";
import ProjectLoader from "@/Components/project-loader";
import filters from "./_filter.json";

const Projects = () => {
  const [dataset, setdataset] = useState(data);
  const [activestate, setactivestate] = useState({
    category: "all",
    title: "Show All",
  });
  const [loader, setloader] = useState({
    title: "showing all the projects",
  });
  useEffect(() => {
    const it = setTimeout(() => {
      setdataset(() => {
        return data.filter((item) => {
          return item.categoies.includes(activestate.category);
        });
      });
    }, 1000);
    if (activestate.category === "all") {
      setloader({ title: `Showing All Projects` });
    } else {
      setloader({ title: `Showing Projects Filtered By ${activestate.title}` });
    }

    return () => {
      clearTimeout(it);
    };
  }, [activestate.category, activestate.title]);

  return (
    <>
      <ProjectLoader title={loader.title} />
      <section className={styles.content}>
        <h2 className={styles.heading}>Work & Projects</h2>
        <p className={styles.text}>
          From frontend development to backend development, From Web Components
          and UI/UX animations to React.JS, Redux, PHP, and Node.JS. Check out
          my latest web software development portfolio projects.
        </p>

        <div>
          {filters.map((item, key) => {
            return (
              <SuperButton3
                title={item.title}
                active={activestate.category === item.category}
                category={item.category}
                setactivestate={setactivestate}
              />
            );
          })}
        </div>
        <div>
          <p>
            {activestate.category === "all"
              ? "Showing All Projects."
              : `Showing Projects Filtered By ${activestate.title}`}
          </p>
        </div>
        <div className={styles.projects}>
          {dataset.map((item) => {
            return (
              <ProjectCard
                title={item.heading}
                imgURL={item.img}
                website={item.website}
                github={item.github}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
