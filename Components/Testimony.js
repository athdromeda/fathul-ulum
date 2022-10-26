import Image from "next/image";
import TestimonyData from "../Data/TestimonyData";

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
    <div className="h-[50vh] py-20 px-16 bg-dark text-white flex flex-col items-center justify-around">
      <section className="flex flex-col md:flex-row gap-8">
        <Card id={0} />
        <Card id={1} />
      </section>
    </div>
  );
}
