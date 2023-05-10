import Clock from "@/utility/clock/clock";
import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import React from "react";
import styles from "./Contacts.module.scss";
import SuperButton4 from "@/Components/super-button-4";
const Contact = () => {
  return (
    <section className={styles.background}>
      <div className={styles.row}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Get in touch</h1>

          <div>
            <form>
              <div className="row">
                <div className={styles["input-container"]}>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="your name"
                    required
                  />
                  <label className={styles.label} htmlFor="name"></label>
                </div>
                <div className={styles["input-container"]}>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="your email"
                    required
                  />
                  <label className={styles.label} htmlFor="email"></label>
                </div>
              </div>
              <div className={styles["input-container"]}>
                <input
                  className={styles.input}
                  type="text"
                  name="subject"
                  placeholder="subject"
                  required
                />
                <label className={styles.label} htmlFor="subject"></label>
              </div>

              <div className={styles["input-container"]}>
                <textarea
                  className={styles.input}
                  placeholder="message"
                  name="message"
                  required
                ></textarea>
                <label className={styles.label} htmlFor="name"></label>
              </div>
              <SuperButton4 />
            </form>
          </div>
        </div>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </section>
  );
};

export default Contact;
