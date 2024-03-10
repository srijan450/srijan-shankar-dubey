import React from "react";
import styles from "../styles/Error.module.scss";
import Image from "next/image";
import Error404Image from "../public/error-404.png";
import SuperButton from "@/Components/super-buttons/superButtons";
const error = () => {
  return (
    <section className="pages">
      <div className="row">
        <div className="center">
          <h2 className={`${styles.heading}`}>404 Error</h2>
          <h3 className={`${styles.subheading} ${styles.center}`}>
            Oops! Looks like you took a wrong turn.
          </h3>
          <p className={styles.subSubHeading}>
            It seems you've stumbled upon a page that's playing hide and seek.
            Don't worry, we're here to help you get back on track!
          </p>

          <div className={styles.image}>
            <div className={styles.imageBg}>
              <Image
                src={Error404Image}
                alt="404 error image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <p className={styles.text}>What can you do now?</p>
          <div className={styles.text}>
            <ul>
              <li>
                Double-check the URL: Make sure there are no typos or extra
                spaces in the address bar. Sometimes, a small mistake can lead
                you to the wrong place.
              </li>

              <li>
                Go to the homepage: Head back to the homepage and navigate from
                there. Our homepage is like a compass that can guide you to the
                right destination.
              </li>

              <li>
                Use the navigation menu to discover more, you might find exactly
                what you were looking for in a different corner.
              </li>

              <li>
                Contact Me: If you're still having trouble, feel free to contact
                me. I am here to assist you and point you in the right
                direction.
              </li>
            </ul>
          </div>

          <p className={styles.text}>
            Remember, even the best explorers get lost sometimes. Thanks for
            your understanding!
          </p>

          <div className={styles["button-container"]}>
            <SuperButton to={"/"} text={"Home"} dir="left" />
            <SuperButton to={"/contact"} text={"Contact me"} dir="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default error;
