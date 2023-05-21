import Header from "@/Components/Header/header";
import MainLoader from "@/Components/mainLoader/MainLoader";
import Layout from "@/Components/pageLayout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
export default function App({ Component, pageProps }) {
  const [count, setcount] = useState(0);
  let socket;
  useEffect(() => {
    if (!socket) {
      socket = io("localhost:5000");

      socket.on("new-unique-identifier", (token) => {
        localStorage.setItem("identifier", token);
        setuniqueIdentier(token);
      });

      socket.emit("user_verification", localStorage.getItem("identifier"));
      // socket.emit("addActiveUsers");

      socket.on("activeUsers", (counter) => {
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
