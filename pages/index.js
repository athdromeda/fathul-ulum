import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "../Components/About";
import Stat from "../Components/Stat";
import Testimony from "../Components/Testimony";
import EndPage from "../Components/EndPage";
import Footer from "../Components/Footer";
import { Slide } from "react-reveal";

const Toolbar = () => {
  return (
    <div className="z-50 flex w-screen flex-row bg-transparent justify-between text-primary text-lg py-8 px-16 absolute top-0">
      <section className="flex items-center gap-3">
        <Image src="/assets/logo/logo-teal.png" width="40px" height="40px" />
        <h1 className="font-black text-2xl">FATHUL ULUM</h1>
      </section>
      <section className="flex gap-8 items-center">
        <h3 className="font-bold">TENTANG</h3>
        <h3 className="font-bold">KELAS</h3>
        <button className="font-bold bg-primary text-white px-4 py-2 rounded-lg">
          DAFTAR
        </button>
      </section>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="h-screen py-20 px-16 bg-white text-dark flex items-center">
      <section className="flex flex-col gap-3 z-10 grow">
        <Slide left cascade>
          <div>
            <p className="text-6xl font-bold">Ayo, mondok di</p>
            <p className="text-7xl font-black leading-tight">FATHUL ULUM</p>
            <p className="text-xl">
              Mengeksplor keilmuwan Islam berbasis kitab kuning
            </p>
          </div>
        </Slide>
        <section>
          <button className="py-3 px-6 bg-primary text-white rounded-lg font-bold m-2">
            Eksplor
          </button>
          <button className="py-3 px-6 bg-primary text-white rounded-lg font-bold m-2">
            Daftar
          </button>
        </section>
      </section>
      <Images />
    </div>
  );
};

const Images = () => {
  return (
    <section className="flex flex-wrap h-full w-1/2 items-center">
      <div className="relative w-full h-full">
        <Slide right>
          <div className="absolute top-14 right-12 shadow-button">
            <Image
              src="/assets/image/image12.png"
              width="300px"
              height="300px"
            />
          </div>
        </Slide>
        <div className="absolute top-36 right-36 shadow-button">
          <Slide left>
            <Image
              src="/assets/image/image11.png"
              width="300px"
              height="300px"
            />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fathul Ulum</title>
        <meta name="description" content="Pondok Pesantren Fathul Ulum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden font-nunito">
        <Toolbar />
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
