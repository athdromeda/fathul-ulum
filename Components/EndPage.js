import { Zoom } from "react-reveal";

export default function EndPage() {
  return (
    <div className="h-[80vh] py-20 px-16 bg-white text-dark flex flex-col items-center justify-around">
      <Zoom>
        <p className="text-4xl font-bold text-center">
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
