import { useState } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from "../styles/Daftar.module.css";

const Kelas = () => {
  const [clicked, setClicked] = useState(0);

  const handleClick = (id) => {
    setClicked(id);
  };

  const choice = [
    { level: "IBTIDA'I", color: "bg-amber-400" },
    { level: "TSANAWI", color: "bg-green-500" },
    { level: "ALIYAH", color: "bg-pink-500" },
  ];

  return (
    <div className="flex mb-6">
      {choice.map((e, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              handleClick(i);
            }}
            className={
              "px-6 py-3 w-full text-white hover:" +
              e.color +
              " " +
              (clicked === i ? e.color:"bg-slate-400")
            }
          >
            {e.level}
          </button>
        );
      })}
    </div>
  );
};

const PendidikanTerakhir = () => {
  const [clicked, setClicked] = useState(0);

  const handleClick = (id) => {
    setClicked(id);
  };

  const levels = [
    "Tidak Ada",
    "SD/Sederajat",
    "SMP/Sederajat",
    "SMA/Sederajat",
    "Pondok Pesantren",
    "Lainnya",
  ];

  return (
    <section className="flex flex-wrap gap-2">
      {levels.map((e, i) => {
        return (
          <button
            onClick={() => {
              setClicked(i);
            }}
            key={i}
            className={"px-3 py-1 hover:bg-primary text-white rounded-md " + (clicked==i ? "bg-primary":"bg-slate-400")}
          >
            {e}
          </button>
        );
      })}
    </section>
  );
};

const Main = () => {
  return (
    <div className="flex flex-col w-full items-center px-16 py-24 min-h-[60vh]">
      <h1 className="font-bold text-2xl">FORM PENDAFTARAN</h1>
      <section className="my-12 w-3/4">
        <Kelas />
        <div>
          <p className="text-sm text-slate-400">Nama Lengkap</p>
          <input className={styles.inputfield} type="text" />
        </div>
        <section className="flex">
          <div>
            <p className="text-sm text-slate-400">TTL</p>
            <div className="flex">
              <input type="text" className={styles.inputloc} />
              <input type="date" className={styles.inputdate} />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400">Nama Ibu/Ayah/Wali</p>
            <input className={styles.inputwali} type="text" />
          </div>
        </section>
        <div>
          <p className="text-sm text-slate-400">Alamat</p>
          <input className={styles.inputfield} type="text" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-slate-400">Pendidikan Terakhir</p>
          <PendidikanTerakhir />
        </div>
      </section>
      <button className="px-4 py-2 bg-primary text-white rounded-md">
        Jadwalkan Pendaftaran
      </button>
    </div>
  );
};

export default function Daftar() {
  return (
    <div>
      <Head>
        <title>Daftar</title>
        <meta name="description" content="Isi formulir pendaftaran pondok" />
      </Head>

      <main className="overflow-hidden font-nunito flex flex-col">
        <Navbar />
        <Main />
      </main>
      <Footer />
    </div>
  );
}
