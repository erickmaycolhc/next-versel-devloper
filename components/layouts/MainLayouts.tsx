import Head from "next/head";
import Navbar from "../Navbar";
//import styles from "../styles/MainLayout.module.css";

export const MainLayouts = ({ children }: any) => {
  return (
    <div className={"container"}>
      <Head>
        <title>Home - Erick</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={"main"}>{children}</main>
    </div>
  );
};
