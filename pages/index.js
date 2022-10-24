import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "../Components/About";
import Stat from "../Components/Stat";
import Testimony from "../Components/Testimony";
import EndPage from "../Components/EndPage";
import Footer from "../Components/Footer";

const Toolbar = () => {
  return (
    <div className="z-50 flex w-screen flex-row bg-transparent justify-between text-primary text-lg py-8 px-16 absolute top-0">
      <section className="flex items-center gap-3">
        <Image src="/assets/logo/logo-teal.png" width="40px" height="40px"/>
      <h1 className="font-semibold text-2xl">FATHUL ULUM</h1>
      </section>
      <section className="flex gap-8">
        <h3>TENTANG</h3>
        <h3>KELAS</h3>
        <h3>DAFTAR</h3>
      </section>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="h-screen py-20 px-16 bg-white text-dark flex items-center">
      <section className="flex flex-col gap-3 z-10 grow">
        <p className="text-6xl font-bold">
          Ayo, mondok di <br />
          <p className="text-7xl font-black leading-tight">FATHUL ULUM</p>
        </p>
        <p className="text-xl">
          Mengeksplor keilmuwan Islam berbasis kitab kuning
        </p>
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
        <div className="absolute top-14 right-12">
          <Image src="/assets/image/image12.png" width="300px" height="300px" />
        </div>
        <div className="absolute top-36 right-36">
          <Image src="/assets/image/image11.png" width="300px" height="300px" />
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
