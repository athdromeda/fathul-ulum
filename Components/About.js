import Image from "next/image";
import { Slide, Zoom } from "react-reveal";
import CardData from "../Data/AboutCardData";

const Card = ({ id }) => {
  return (
    <Zoom>
      <div className="flex gap-4">
        <section className="py-4 px-8 rounded-lg flex items-center">
          {CardData[id].icon}
        </section>
        <div className="py-4 px-8 bg-white hover:shadow-button rounded-lg w-80">
          <p className="font-bold">{CardData[id].title}</p>
          <p>{CardData[id].caption}</p>
        </div>
      </div>
    </Zoom>
  );
};

export default function About() {
  return (
    <div className="h-screen py-20 px-16 bg-white text-dark items-center flex justify-between flex-col-reverse lg:flex-row ">
        <section className="flex flex-wrap h-full w-1/2 items-center">
          <div className="relative w-full h-full">
            <Slide right>
              <div className="absolute top-36 right-36 shadow-button h-fit w-fit">
                <Image
                  src="/assets/image/image22.png"
                  width="300px"
                  height="300px"
                />
              </div>
            </Slide>
            <Slide left>
              <div className="absolute top-14 right-12 shadow-button h-fit w-fit">
                <Image
                  src="/assets/image/image21.png"
                  width="300px"
                  height="300px"
                />
              </div>
            </Slide>
          </div>
        </section>
        <section className=" flex flex-col gap-8">
          <Card id={0} />
          <Card id={1} />
          <Card id={2} />
        </section>
    </div>
  );
}
