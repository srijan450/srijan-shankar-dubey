import Link from "next/link";
import styles from "./superButtons.module.scss";

const SuperButton = ({ text, to, dir = "" }) => {
  return dir === "left" ? (
    <Link className={styles.buttonL} href={to}>
      {text}
    </Link>
  ) : (
    <Link className={styles.buttonR} href={to}>
      {text}
    </Link>
  );
};

export default SuperButton;
