import React, { useEffect } from "react";
import styles from "./HyperCube.module.scss";

const HyperCube = () => {
  useEffect(() => {
    const cube = document.getElementById("cube");
    let isMouseDown = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;

    cube.addEventListener("mousedown", handleMouseDown);
    cube.addEventListener("mousemove", handleMouseMove);
    cube.addEventListener("mouseleave", handlemouseLeave);
    cube.addEventListener("mouseover", handleMouseOver);

    function handleMouseDown(event) {
      isMouseDown = true;
      startX = event.clientX;
      startY = event.clientY;
    }

    function handleMouseMove(event) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      currentX += deltaX * 0.8;
      currentY -= deltaY * 0.8;

      cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

      startX = event.clientX;
      startY = event.clientY;
    }

    function handleMouseOver() {
      cube.classList.remove(styles.animation);
    }

    function handlemouseLeave() {
      cube.classList.add(styles.animation);
    }
    return () => {
      cube.removeEventListener("mousedown", handleMouseDown);
      cube.removeEventListener("mousemove", handleMouseMove);
      cube.removeEventListener("mouseleave", handlemouseLeave);
      cube.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return (
    <div className={`${styles.cube} ${styles.animation}`} id="cube">
      <div className={`${styles.face} ${styles.front}`}>
        User Interface (UI) and User Experience (UX) Design
      </div>
      <div className={`${styles.face} ${styles.back}`}>
        Server-Side Development
      </div>
      <div className={`${styles.face} ${styles.right}`}>
        Problem Solving and Security Practices
      </div>
      <div className={`${styles.face} ${styles.left}`}>
        Communication, Collaboration, and Deployment
      </div>
      <div className={`${styles.face} ${styles.top}`}>
        Cross-Platform Development
      </div>
      <div className={`${styles.face} ${styles.bottom}`}>
        State Management and API Developmen
      </div>
    </div>
  );
};

export default HyperCube;
