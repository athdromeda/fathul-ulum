import { Slide } from "react-reveal";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen max-h-fit py-16 px-16 bg-white text-dark grid grid-cols-1 md:grid-cols-2 gap-4">
      <MainText />
      <Images />
    </div>
  );
};

const MainText = () => {
  return (
    <section className="flex flex-col gap-3 z-10 grow items-center text-center md:items-start justify-center md:text-left">
      <Slide left cascade>
        <div>
          <p className="text-6xl font-bold">Ayo, mondok di</p>
          <p className="text-6xl md:text-7xl font-black leading-tight">
            FATHUL ULUM
          </p>
          <p className="text-xl">
            Mengeksplor keilmuwan Islam berbasis kitab kuning
          </p>
        </div>
      </Slide>
      <section>
        <button className="py-3 px-6 border-2 border-primary bg-white text-primary rounded-lg font-bold m-2">
          Eksplor
        </button>
        <button className="py-3 px-6 border-2 border-primary bg-primary text-white rounded-lg font-bold m-2">
          Daftar
        </button>
      </section>
    </section>
  );
};

const Images = () => {
  return (
    <section className="grid">
      <Slide right>
        <div className="second-image-hero">
          <Image src="/assets/image/image12.png" layout="fill" objectFit="contain" />
        </div>
      </Slide>
      <Slide left>
        <div className="first-image-hero">
          <Image src="/assets/image/image11.png" layout="fill" objectFit="contain"/>
        </div>
      </Slide>
    </section>
  );
};

export default Hero;
