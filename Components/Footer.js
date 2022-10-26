import Image from "next/image";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import Credit from "./Credit";

const Sitemap = () => {
  return (
    <section className="flex flex-row gap-8">
      <section>
        <p className="font-bold">TENTANG</p>
        <p>Linimasa</p>
        <p>Kelas</p>
        <p className="font-bold">KERJA SAMA</p>
        <p>Media</p>
        <p>Donasi</p>
      </section>
      <section>
        <p className="font-bold">ALUMNI</p>
        <p>Tokoh</p>
        <p>Kolom</p>
        <p>Blog</p>
        <p>Sapa Alumni</p>
      </section>
    </section>
  );
};

const Details = () => {
  return (
    <section className="flex flex-col gap-4">
      <section className="flex flex-row gap-4">
        <div>
          <Image src="/assets/logo/logo-white.png" width={100} height={100} />
        </div>
        <div>
          <p className="font-bold">PONDOK PESANTREN FATHUL ULUM</p>
          <p>Jl. Lurus No. 24, Pekalongan, 51152</p>
          <p>Telp/WA: 0899-9999-9999</p>
          <p>Email: hello@fathululum.sch.id</p>
        </div>
      </section>
      <section className="flex gap-4">
        <a href="http://facebook.com/sapa.fathululum">
          <BsFacebook size={25} />
        </a>
        <a href="http://instagram.com/media.fathululum">
          <BsInstagram size={25} />
        </a>
        <a href="http://twitter.com/heyfathululum">
          <BsTwitter size={25} />
        </a>
      </section>
    </section>
  );
};

export default function Footer() {
  return (
    <footer className="px-16 py-8 flex flex-wrap flex-row w-full justify-center items-center h-1/3 bg-dark text-white font-nunito">
      <section className="px-16 py-8 flex flex-wrap flex-row w-full justify-between gap-8">
        <Details />
        <Sitemap />
      </section>
      <Credit/>
    </footer>
  );
}
