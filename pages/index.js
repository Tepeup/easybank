import Head from "next/head";
import Nav from "../components/Navigation/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Easybank</title>
        <meta name="description" content="Easybank" />
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
