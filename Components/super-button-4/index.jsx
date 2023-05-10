import styles from "./superbutton4.module.scss";

const SuperButton4 = ({
  color = "#08fdd8",
  background = "black",
  overlaycolor = "white",
  title = "send message!",
  property = "button",
  position = "end",
  link,
}) => {
  return (
    <div className={styles.container} style={{ textAlign: position }}>
      {property === "button" ? (
        <button
          className={styles.button4}
          style={{
            "--bg": background,
            "--color": color,
            "--overlaycolor": overlaycolor,
          }}
        >
          {title}
        </button>
      ) : (
        <a
          className={styles.button4}
          style={{
            "--bg": background,
            "--color": color,
            "--overlaycolor": overlaycolor,
          }}
          href={link}
          target="_blank"
        >
          {title}
        </a>
      )}
    </div>
  );
};

export default SuperButton4;
