import Clock from "@/utility/clock/clock";
import SuperButton_A from "@/Components/super-buttons/superButton2";
import SuperButton from "@/Components/super-buttons/superButtons";
import React, { useRef, useState } from "react";
import styles from "./Contacts.module.scss";
import SuperButton4 from "@/Components/super-button-4";
import PageNavigator from "@/Components/page-navigation";
const Contact = () => {
  const regex = {
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  };

  const [showloader, setshowloader] = useState(false);

  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [fedata, setFedata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFedata((prev) => {
      return { ...prev, [name]: "" };
    });
    setFdata((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const inputFocusChange = (e) => {
    const { name, value } = e.target;
    setFdata((prev) => {
      return { ...prev, [name]: value.trim() };
    });
    if (name === "name" || name === "email")
      regex[name].test(fdata[name].trim())
        ? setFedata((prev) => ({ ...prev, [name]: "success" }))
        : setFedata((prev) => ({ ...prev, [name]: "error" }));
    else {
      fdata[name] !== ""
        ? setFedata((prev) => ({ ...prev, [name]: "success" }))
        : setFedata((prev) => ({ ...prev, [name]: "error" }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const errorStatus = Object.values(fedata);
    const error = errorStatus.includes("error");
    console.log(e.target.elements.submit);
    if (!error) {
      setshowloader(true);
      const res = await fetch("http://localhost:5000/contact-me", {
        method: "POST",
        body: JSON.stringify(fdata),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFdata({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setFedata({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          e.target.children.sumit.innerHTML = "sent";
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setshowloader(false);
        });
    }
  };

  return (
    <section className={styles.background}>
      <PageNavigator
        prev={"skills"}
        prevLink={"/skills"}
        next={"skills"}
        nextLink={"/skills"}
      />
      <div className={styles.row}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Contact & Connect</h1>
          <div>
            <form method="POST" onSubmit={submitHandler}>
              <div className="row">
                <div
                  className={`${styles["input-container"]} ${
                    styles[fedata.name]
                  }`}
                >
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={fdata.name}
                    onChange={inputHandler}
                    onBlur={inputFocusChange}
                    placeholder="your name"
                    title="Kindly provide your name!"
                    required
                  />
                  <label className={styles.label} htmlFor="name"></label>
                </div>
                <div
                  className={`${styles["input-container"]} ${
                    styles[fedata.email]
                  }`}
                >
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={fdata.email}
                    onChange={inputHandler}
                    onBlur={inputFocusChange}
                    placeholder="your email"
                    title="Kindly provide your email!"
                    required
                  />
                  <label className={styles.label} htmlFor="email"></label>
                </div>
              </div>
              <div
                className={`${styles["input-container"]} ${
                  styles[fedata.subject]
                }`}
              >
                <input
                  className={styles.input}
                  type="text"
                  name="subject"
                  value={fdata.subject}
                  onChange={inputHandler}
                  onBlur={inputFocusChange}
                  placeholder="subject"
                  title="Please provide the subject for your message!"
                  required
                />
                <label className={styles.label} htmlFor="subject"></label>
              </div>

              <div
                className={`${styles["input-container"]} ${
                  styles[fedata.message]
                }`}
              >
                <textarea
                  className={`${styles.input} ${styles.textArea}`}
                  placeholder="message"
                  name="message"
                  value={fdata.message}
                  onChange={inputHandler}
                  onBlur={inputFocusChange}
                  title="Kindly message me the opportunities or for cobalartion!"
                  required
                ></textarea>
                <label className={styles.label} htmlFor="message"></label>
              </div>
              <SuperButton4
                name="submit"
                type="submit"
                showLoader={showloader}
              />
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
