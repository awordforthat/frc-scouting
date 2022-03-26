import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Template Project</title>
        <meta name="description" content="Edit me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Next.js boilerplate project. (edit me!);</h1>
      </main>

      <footer className={styles.footer}>Put your footer here</footer>
    </div>
  );
};

export default Home;
