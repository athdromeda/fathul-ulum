import { Zoom } from "react-reveal";

export default function EndPage() {
  return (
    <div className="h-screen py-20 px-16 bg-white text-black flex flex-col items-center justify-around">
      <Zoom>
        <p className="text-4xl font-bold">
          Mulai belajar dan arungi luasnya keilmuan Islam!
        </p>
        <button className="font-bold bg-primary text-white px-8 py-4 rounded-lg">
          Daftar Sekarang
        </button>
        <section className="flex"></section>
      </Zoom>
    </div>
  );
}
