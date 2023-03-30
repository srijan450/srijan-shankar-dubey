import Link from "next/link";
import styles from "./superButtons.module.scss";

const SuperButton = ({ text, to }) => {
  return (
    <Link className={styles.button} href={to}>
      {text}
    </Link>
  );
};

export default SuperButton;
