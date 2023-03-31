import styles from "./superButtons.module.scss";

const SuperButton_A = ({ text, to }) => {
  return (
    <a className={styles.button} href={to} target="_blank">
      {text}
    </a>
  );
};

export default SuperButton_A;
