import Head from "next/head";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const Href = ({ text, href }) => {
  return (
    <Link href={href}>
      <p className="font-bold inline ml-1 cursor-pointer hover:underline hover:text-primary">
        {text}
      </p>
    </Link>
  );
};

export default function Readme() {
  return (
    <div>
      <Head>
        <title>Fathul Ulum</title>
        <meta name="description" content="Pondok Pesantren Fathul Ulum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-16 px-16 text-dark font-nunito text-lg flex flex-col items-center">
        <h1 className="font-bold text-2xl">Website Fathul Ulum</h1>
        <h3 className="text-sm">by Muhammad Aniq Athoillah</h3>
        <section>
          <ul className="flex gap-4 mb-5 mt-3">
            <li>
              <Href text="Home" href="/" />
            </li>
            <li>
              <Href text="Daftar" href="/daftar" />
            </li>
            <li>
              <Href text="Credit" href="/credit" />
            </li>
          </ul>
        </section>
        <section className="text-justify">
          <p className="italic text-center px-12 mb-5">
            Website Fathul Ulum merupakan landing page profil pondok pesantren
            "Fathul Ulum" yang berisikan selayang pandang pondok pesantren
            Fathul Ulum. Website ini dibuat dengan gaya UI modern dan animasi
            elegan.
          </p>
          <Slide bottom cascade>
            <div>
              <section className="mb-5">
                <h2 className="font-bold">Framework</h2>
                <p className="indent-8">
                  Framework yang digunakan dalam projek ini adalah React +
                  NextJS. React merupakan library Javascript populer untuk
                  membangun user interface, di samping VueJS, Angular, dan
                  beberapa pilihan lain. React memiliki style code yang khas
                  serta dilengkapi dengan fitur Hooks. NextJS merupakan
                  framework React yang secara default memiliki fitur routing
                  yang mempermudah untuk menyambungkan antar halaman website
                  dibandingkan menggunakan package react-route.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="font-bold">Styling</h2>
                <p className="indent-8">
                  Untuk styling, digunakan TailwindCSS. TailwindCSS merupakan
                  framework CSS yang sifatnya utility-first. Penggunaannya cukup
                  simpel karena hanya dengan menambahkan class pada elemen HTML,
                  berbeda dengan SCSS. TailwindCSS memungkinkan developer untuk
                  bebas berkreasi membuat design, berbeda dengan framework CSS
                  yang paten seperti MaterialUI ataupun ChakraUI. Animasinya
                  dibangun dengan package react-reveal yang menyediakan pilihan
                  yang cocok digunakan dalam pembuatan website ini.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="font-bold">Aset</h2>
                <p className="indent-8">
                  Aset icon diambil menggunakan React-Icon yang menampung icon,
                  sebagian berasal dari Material Design Icons dan Bootstrap
                  Icons. Aset gambar diambil dari Unsplash. Aset-aset yang
                  digunakan merupakan aset-aset yang bisa digunakan bebas baik
                  untuk project komersial maupun non-komersial serta tidak
                  melanggar hak cipta yang dijelaskan pada catatan lisensinya
                  masing-masing yang dapat dilihat di halaman Credit.
                </p>
              </section>
            </div>
          </Slide>
        </section>
      </main>
    </div>
  );
}
