import React from "react";
import styles from "./pageNavigator.module.scss";
import Link from "next/link";
const PageNavigator = ({ prev, prevLink, next, nextLink }) => {
  return (
    <>
      <div className={styles["page-nav"]}>
        {prev && (
          <Link href={prevLink} as={prevLink} className={styles.prev}>
            <span className={styles.span}>{prev}</span>
            <em className={styles.em}></em>
          </Link>
        )}

        {next && (
          <Link href={nextLink} as={nextLink} className={styles.next}>
            <span className={styles.span}>{next}</span>
            <em className={styles.em}></em>
          </Link>
        )}
      </div>
    </>
  );
};

export default PageNavigator;
