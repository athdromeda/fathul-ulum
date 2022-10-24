import Image from "next/image";

const Navbar = () => {
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

export default Navbar;
