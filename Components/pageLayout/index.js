import Head from "next/head";
import React from "react";
import Header from "../Header/header";
import MainLoader from "../mainLoader/MainLoader";
import ActiveUsers from "@/utility/activeUsers";

const Layout = ({ count, children }) => {
  return (
    <>
      <Head>
        <title>Srijan Shankar Dubey | Software Developer | Frontend Developer | Backend Developer | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="q5Dda7j3FF_5PI0VJh7vCfvdEwBojf6BDasefsDYtvU"
        />
      </Head>
      <Header />
      <MainLoader />
      <main className={`page main-div`} id="page">
        {children}
      </main>
      <ActiveUsers count={count} />
    </>
  );
};

export default Layout;
