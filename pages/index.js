import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../Components/About";
import Stat from "../Components/Stat";
import Testimony from "../Components/Testimony";
import EndPage from "../Components/EndPage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fathul Ulum</title>
        <meta name="description" content="Pondok Pesantren Fathul Ulum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden font-nunito flex flex-col">
        <Navbar />
        <Profile />
        <About />
        <Stat />
        <Testimony />
        <EndPage />
      </main>
      <Footer />
    </div>
  );
}
