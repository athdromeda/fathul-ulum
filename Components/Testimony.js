import Image from "next/image";

const TestimonyData = [
  {
    name: "K.H. Fulan",
    title: "Rois Syuriah PWNU Jawsel",
    comment:
      "Fathul Ulum merupakan cikal bakal berkembangnya pondok pesantren di Pekalongan. Pengaruhnya menyebar hingga ke wilayah Tegal, Brebes, bahkan Temanggung.",
    imagePath: "/assets/avatar/avatar1.png",
    imageUrl: "https://unsplash.com/photos/JQ5ZT-MEppc",
  },
  {
    name: "Zaid ibnu Malik",
    title: "Pengasuh Ma'had Tebuireng",
    comment:
      "Kurikulum yang dipakai berbeda dengan pondok salaf lain. Fathul Ulum kerap memberi studi kasus relevan di setiap zaman.",
    imagePath: "/assets/avatar/avatar4.png",
    imageUrl: "https://unsplash.com/photos/o-pH18YVcS0",
  },
  {
    name: "Gus Rofiq",
    title: "Awardee Santri Abroad",
    comment:
      "Fathul Ulum benar-benar merubah diri saya. Tidak cuma diajari mengenai keilmuan fikih, namun juga mindset kita ditata.",
    imagePath: "/assets/avatar/avatar3.png",
    imageUrl: "https://unsplash.com/photos/KIPqvvTOC1s",
  },
  {
    name: "Dr. Ahmad Ziyad, M. Ag.",
    title: "Rektor UIN Abdul Wahhab",
    comment:
      "Pondok merupakan miniatur kehidupan. Belajar di pondok seperti halnya belajar bersama masyarakat. Saling membangun toleransi dan solidaritas.",
    imagePath: "/assets/avatar/avatar2.png",
    imageUrl: "https://unsplash.com/photos/s27B05TjXxw",
  },
];

const Card = ({ id }) => {
  return (
    <div className="min-w-[30vw] flex flex-col gap-4 m-4">
      <section className="flex gap-3">
        <div>
          <Image src={TestimonyData[id].imagePath} width="50px" height="50px"/>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{TestimonyData[id].name}</p>
          <p>{TestimonyData[id].title}</p>
        </div>
      </section>
      <section>
        <p className="italic">"{TestimonyData[id].comment}"</p>
      </section>
    </div>
  );
};

export default function Testimony() {
  return (
    <div className="h-[50vh] py-20 px-16 bg-dark text-white flex flex-col items-center justify-around">
      <section className="flex">
        <Card id={0} />
        <Card id={1} />
      </section>
    </div>
  );
}

// https://unsplash.com/photos/KIPqvvTOC1s
