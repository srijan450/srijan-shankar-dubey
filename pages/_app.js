import Layout from "@/Components/pageLayout";
import "@/styles/globals.css";
import "@/styles/pages.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
export default function App({ Component, pageProps }) {
  const [count, setcount] = useState(0);
  let socket;
  useEffect(() => {
    if (!socket) {
      socket = io("https://portfolio-backend-m14e.onrender.com");

      socket.on("new-unique-identifier", (token) => {
        localStorage.setItem("identifier", token);
      });

      socket.emit("user_verification", localStorage.getItem("identifier"));

      socket.on("activeUsers", (counter) => {
        console.log(counter);
        setcount(counter);
      });
    }
    return () => {
    };
  }, []);
  return (
    <>
      <Layout count={count}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
