import Router from "next/router";
import { useEffect, useState } from "react";
import styles from "./MainLoader.module.scss";

const MainLoader = () => {
  const [loader, setloader] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setloader(false);
      console.log("start");
    });
    Router.events.on("routeChangeComplete", () => {
      setloader(true);
      console.log("end");
    });
    Router.events.on("routeChangeError", () => {
      setLoading(false);
      console.log("error");
    });

    return () => {
      Router.events.off("routeChangeStart", () => setLoading(false));
      Router.events.off("routeChangeComplete", () => setLoading(true));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  //   console.log(Router.events.on);
  return (
    <div
      className={`${styles["loader-container"]} ${
        loader
          ? styles["show-loader-container"]
          : styles["hide-loader-container"]
      }`}
    >
      <div className={styles.loader}>
        <img src="./public/avatar.png" alt="" />
      </div>
    </div>
  );
};

export default MainLoader;
