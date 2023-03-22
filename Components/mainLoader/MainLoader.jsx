import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./MainLoader.module.scss";

const MainLoader = () => {
  const [loader, setloader] = useState(true);

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
