import React from "react";
import styles from "./activeusers.module.scss";
const ActiveUsers = ({ count }) => {
  return (
    <div className={styles.activeUsers}>
      {count <= 1
        ? "Only you are watching my portfolio."
        : `You and ${count - 1} other${
            count - 1 === 1 ? " is" : "s are"
          } watching my portfolio.`}
    </div>
  );
};

export default ActiveUsers;
