import Clock from "@/utility/clock/clock";
import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import React from "react";
import styles from "./Contacts.module.scss";
const Contact = () => {
  return (
    <div className={styles.background}>
      <div className={styles.row}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Get in touch</h1>

          <div>
            <form>
              <div className="row">
                <div className={styles["input-container"]}>
                  <label htmlFor="name">
                    <input
                      className={styles["input"]}
                      type="text"
                      name="name"
                      placeholder="your name"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject"></label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
            </form>
          </div>
          {/* <div className={styles["button-container"]}>
            <SuperButton text={"contact me"} to={"/contact"} />
            <SuperButton_A
              text={"My Resume"}
              to={"https://bit.ly/srijan_resume"}
            />
          </div> */}
        </div>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Contact;
