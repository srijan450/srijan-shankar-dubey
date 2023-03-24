import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./MainLoader.module.scss";

const MainLoader = () => {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setloader(true);
      console.log("start");
    });
    Router.events.on("routeChangeComplete", () => {
      setloader(false);
      console.log("end");
    });
    Router.events.on("routeChangeError", () => {
      setloader(false);
      console.log("error");
    });

    return () => {
      Router.events.off("routeChangeStart", () => setloader(false));
      Router.events.off("routeChangeComplete", () => setloader(true));
      Router.events.off("routeChangeError", () => setloader(false));
    };
  }, [Router.events]);

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        setloader(false);
      }, 4000);
      var now = new Date().getTime();
      var page_load_time = now - performance.timing.navigationStart;
      console.log("User-perceived page loading time: " + page_load_time);
    }
  }, []);

  return (
    <div
      className={`${styles["loader-container"]} ${
        loader
          ? styles["show-loader-container"]
          : styles["hide-loader-container"]
      }`}
    >
      <div className={styles.loader}>
        <img src="./avatar.png" alt="" />
      </div>
    </div>
  );
};

export default MainLoader;
