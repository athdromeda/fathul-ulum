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

export default function Stat() {
  return (
    <div className="h-1/2 py-20 px-16 bg-dark text-white flex flex-wrap gap-8 items-center justify-around">
      <Zoom>
        <Section value={2034} emoji="👦" caption="Santri Aula" />
      </Zoom>
      <Zoom>
        <Section value={1800} emoji="🧑" caption="Santri Wustha" />
      </Zoom>
      <Zoom>
        <Section value={3458} emoji="👨‍🎓" caption="Santri Alumni" />
      </Zoom>
    </div>
  );
}
