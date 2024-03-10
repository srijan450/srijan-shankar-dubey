import styles from "./superButtons.module.scss";

const SuperButton_A = ({ text, to, dir = "" }) => {
  return dir === "left" ? (
    <a className={styles.buttonL} href={to} target="_blank">
      {text}
    </a>
  ) : (
    <a className={styles.buttonR} href={to} target="_blank">
      {text}
    </a>
  );
};

export default SuperButton_A;
