import Image from "next/image";
const Icon = ({ url }) => {
  return <Image src={url} width={20} height={20} />;
};
const Credit = () => {
  return (
    <div className="opacity-30 hover:opacity-100 inline-flex text-center">
      <p>
        {"Built with "}
        <span class="inline-flex">
          <span class="animate-ping absolute inline-flex">❤️</span>
          <span class="relative inline-flex">❤️</span>
        </span>
        , react, nextjs, tailwind, react-icon, react-reveal, unsplash,
        <span className="bg-primary text-white px-1 cursor-pointer ">
          and many more...
        </span>
      </p>
    </div>
  );
};

export default Credit;
