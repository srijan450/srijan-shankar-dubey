import Header from "@/Components/Header/header";
import MainLoader from "@/Components/mainLoader/MainLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <MainLoader  />
      <Component {...pageProps} />
    </>
  );
}
