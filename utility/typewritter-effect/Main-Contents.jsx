import React, { memo, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import styles from "./Typewritter.module.scss";
const Typewritter = () => {
  // const colours = [
  //   {
  //     color: "hsl(180deg, 50%, 70%)",
  //     textShadow:
  //       "0 0 10px hsl(180deg, 50%, 70%), 0 0 20px hsl(180deg, 50%, 70%), 0 0 30px hsl(180deg, 50%, 70%)",
  //   },
  //   {
  //     color: "hsl(50deg, 90%, 85%)",
  //     textShadow:
  //       "0 0 10px hsl(50deg, 90%, 85%), 0 0 20px hsl(50deg, 90%, 85%), 0 0 30px hsl(50deg, 90%, 85%)",
  //   },
  //   {
  //     color: "hsl(310deg 90% 75%)",
  //     textShadow:
  //       "0 0 10px hsl(310deg, 90%, 75%), 0 0 20px hsl(310deg, 90%, 75%), 0 0 30px hsl(310deg, 90%, 75%)",
  //   },
  // ];
  // const [st, setSt] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSt((prev) => (prev + 1) % 3);
  //   }, 2000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className={styles.text_style}>
      <Typewriter
        options={{
          strings: [
            "Frontend Developer.",
            "Backend Developer.",
            "Full Stack Developer.",
            "Freelancer.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default memo(Typewritter);
