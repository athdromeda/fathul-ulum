import Image from "next/image";
import { Slide, Zoom } from "react-reveal";
import CardData from "../Data/AboutCardData";

const Card = ({ id }) => {
  return (
    <Zoom>
      <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
        <section className="py-4 px-8 rounded-lg flex items-center">
          {CardData[id].icon}
        </section>
        <div className="py-4 px-8 bg-white hover:shadow-button rounded-lg w-80 text-center md:text-start">
          <p className="font-bold">{CardData[id].title}</p>
          <p>{CardData[id].caption}</p>
        </div>
      </div>
    </Zoom>
  );
};

const Images = () => {
  return (
    <section className="grid min-h-[50%]">
      <Slide right>
        <div className="second-image-about">
          <Image
            src="/assets/image/image22.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Slide>
      <Slide left>
        <div className="first-image-about">
          <Image
            src="/assets/image/image21.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Slide>
    </section>
  );
};
export default function About() {
  return (
    <div className="min-h-screen max-h-fit py-20 px-16 bg-white text-dark grid grid-cols-1 md:grid-cols-2 gap-4">
      <Images />
      <section className=" flex flex-col gap-8 items-center">
        <Card id={0} />
        <Card id={1} />
        <Card id={2} />
      </section>
    </div>
  );
}
