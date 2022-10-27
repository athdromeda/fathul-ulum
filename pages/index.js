import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../Components/About";
import Testimony from "../Components/Testimony";
import EndPage from "../Components/EndPage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Profile";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fathul Ulum</title>
        <meta name="description" content="Pondok Pesantren Fathul Ulum" />
      </Head>

      <main className="overflow-hidden font-nunito flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Testimony />
        <EndPage />
      </main>
      <Footer />
    </div>
  );
}
