import styles from "./superbutton4.module.scss";

const SuperButton4 = ({
  color = "#3EDAD8",
  background = "black",
  overlaycolor = "white",
  title = "send message!",
  property = "button",
  position = "end",
  link,
  name,
  type = "button",
  showLoader = false,
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
          name={name}
          type={type}
          disabled={showLoader}
        >
          {!showLoader && title}{" "}
          {showLoader && (
            <>
              sending... <span className={styles.loader}></span>
            </>
          )}
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
