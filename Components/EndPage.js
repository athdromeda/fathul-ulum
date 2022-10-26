import Image from "next/image";
import { useState } from "react";
import { Zoom } from "react-reveal";

export default function EndPage() {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div className="h-[80vh] py-20 px-16 bg-white text-dark relative">
      <div className={(isHover? 'opacity-10':'opacity-20')}>
        <Image
          src="/assets/end-page.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col items-center justify-evenly h-full">
        <Zoom>
          <p className="text-4xl font-bold text-center z-20">
            Mulai belajar dan arungi luasnya keilmuan Islam!
          </p>
          <button
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="font-bold bg-primary text-white px-8 py-4 rounded-lg z-20"
          >
            Daftar Sekarang
          </button>
        </Zoom>
      </div>
    </div>
  );
}
