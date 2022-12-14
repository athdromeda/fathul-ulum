import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-50 flex w-screen flex-wrap bg-transparent justify-center items-center md:justify-between text-primary text-lg pb-2 pt-4 px-16">
      <section className="flex items-center gap-3">
        <Image src="/assets/logo/logo-teal.png" width="40px" height="40px" />
        <h1 className="font-black text-2xl">
          <Link href="/">FATHUL ULUM</Link>
        </h1>
      </section>
      <section className="hidden lg:flex gap-8 items-center">
        <h3 className="font-bold">TENTANG</h3>
        <h3 className="font-bold">KELAS</h3>
        <button className="font-bold bg-primary text-white px-4 py-2 rounded-lg">
          <Link href="/daftar">DAFTAR</Link>
        </button>
      </section>
    </div>
  );
};

export default Navbar;
