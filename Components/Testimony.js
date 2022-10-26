import Image from "next/image";
import TestimonyData from "../Data/TestimonyData";
import { useEffect, useState } from "react";
import { Zoom } from "react-reveal";

const Section = ({ value, caption, emoji }) => {
  const [val, setVal] = useState(-1 * value);

  useEffect(() => {
    const interval = setInterval(() => {
      if (val < 0) {
        setVal((val) => val + 100);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [val]);

  return (
    <div className="flex items-center flex-col min-w-[20%] min-h-[30%]">
      <p className="font-bold text-6xl pt-4">{emoji}</p>
      <p className="font-bold text-6xl pt-4">{value + val}+</p>
      <div className="text-xl w-full h-full text-center">{caption}</div>
    </div>
  );
};

const Stat = () => {
  return (
    <div className="w-full flex flex-wrap gap-8 items-center justify-around">
      <Zoom>
        <Section value={2034} emoji="👦" caption="Santri Tsanawi" />
      </Zoom>
      <Zoom>
        <Section value={1800} emoji="🧑" caption="Santri Aliyah" />
      </Zoom>
      <Zoom>
        <Section value={3458} emoji="👨‍🎓" caption="Santri Alumni" />
      </Zoom>
    </div>
  );
};

const Card = ({ id }) => {
  return (
    <div className="min-w-[30vw] flex flex-wrap flex-col gap-4 m-4">
      <section className="flex gap-3">
        <div>
          <a href={TestimonyData[id].imageUrl}>
            <Image
              src={TestimonyData[id].imagePath}
              width="50px"
              height="50px"
            />
          </a>
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
    <div className="min-h-screen max-h-fit w-full py-20 px-16 bg-dark text-white flex flex-col gap-16 items-center justify-around">
      <Stat/>
      <section className="flex flex-col md:flex-row gap-8">
        <Card id={0} />
        <Card id={1} />
      </section>
    </div>
  );
}
