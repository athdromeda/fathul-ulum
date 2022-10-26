import Image from "next/image";
const Icon = ({ url }) => {
  return <Image src={url} width={20} height={20} />;
};
const Credit = () => {
  return (
    <div className="flex gap-1 opacity-30 hover:opacity-100 items-center">
      <p>{"Built with "}</p>
      <span class="flex">
        <span class="animate-ping absolute inline-flex">❤️</span>
        <span class="relative inline-flex">❤️</span>
      </span>
      <section>, react, nextjs, tailwind, react-icon, react-reveal, unsplash,</section>
      <button className="bg-primary text-white px-1 ">and many more...</button>
    </div>
  );
};

export default Credit;
