import { Slide } from "react-reveal";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="h-screen py-16 px-16 bg-white text-dark flex items-center flex-col lg:flex-row">
      <MainText />
      <Images />
    </div>
  );
};

const MainText = () => {
  return (
    <section className="flex flex-col gap-3 z-10 grow items-center text-center md:items-start md:text-left">
      <Slide left cascade>
        <div>
          <p className="text-6xl font-bold">Ayo, mondok di</p>
          <p className="text-6xl md:text-7xl font-black leading-tight">FATHUL ULUM</p>
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
    <section className="flex flex-wrap h-full w-1/2 items-center">
      <div className="relative w-full h-full">
        <Slide right>
          <div className="absolute top-14 right-12 shadow-button">
            <Image
              src="/assets/image/image12.png"
              width="300px"
              height="300px"
            />
          </div>
        </Slide>
        <div className="absolute top-36 right-36 shadow-button">
          <Slide left>
            <Image
              src="/assets/image/image11.png"
              width="300px"
              height="300px"
            />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Profile;
