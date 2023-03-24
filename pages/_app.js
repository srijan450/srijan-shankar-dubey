import Header from "@/Components/Header/header";
import MainLoader from "@/Components/mainLoader/MainLoader";
import Layout from "@/Components/pageLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
