import Image from "next/image";
import {
  MdOutlineGroups,
  MdOutlineMenuBook,
  MdMilitaryTech,
} from "react-icons/md";

const CardData = [
  {
    icon: <MdOutlineGroups size={60} />,
    title: "Cocok untuk Segala Usia",
    caption: "Lingkungan belajar yang mendukung baik untuk anak maupun remaja",
  },
  {
    icon: <MdOutlineMenuBook size={60} />,
    title: "Sarana Belajar Memadai",
    caption:
      "Fathul Ulum menyediakan sarana belajar yang baik berupa buku maupun instrumen",
  },
  {
    icon: <MdMilitaryTech size={60} />,
    title: "Kyai dan Ustad Berkompeten",
    caption:
      "Pengajar merupakan alumni dari pondok-pondok besar di Jawa Timur, Magelang, maupun Sarang",
  },
];

const Card = ({ id }) => {
  return (
    <div className="flex gap-4">
      <section className="py-4 px-8 rounded-lg flex items-center">
        {CardData[id].icon}
      </section>
      <div className="py-4 px-8 bg-white shadow-md rounded-lg w-80">
        <p className="font-bold">{CardData[id].title}</p>
        <p>{CardData[id].caption}</p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="h-screen py-20 px-16 bg-white text-dark items-center">
      <section className="flex justify-between">
          <section className="flex flex-wrap h-full w-1/2 items-center">
            <div className="relative w-full h-full">
              <div className="absolute top-36 right-36">
                <Image
                  src="/assets/image/image22.png"
                  width="300px"
                  height="300px"
                />
              </div>
              <div className="absolute top-14 right-12">
                <Image
                  src="/assets/image/image21.png"
                  width="300px"
                  height="300px"
                />
              </div>
            </div>
          </section>
        <section className=" flex flex-col gap-8">
          <Card id={0} />
          <Card id={1} />
          <Card id={2} />
        </section>
      </section>
    </div>
  );
}