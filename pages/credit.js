import { useState } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Card = ({ title, license, url, color }) => {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <a
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      href={url}
      className={
        "font-bold text-lg text-white w-fit px-4 py-2 rounded-lg " +
        color +
        " " +
        (isHover ? "relative bottom-2" : "inline-block")
      }
    >
      {title}
      <span
        className={"ml-2 font-normal " + (isHover ? "inline-block" : "hidden")}
      >
        {" - " + license}
      </span>
    </a>
  );
};
const Main = () => {
  return (
    <div className="h-[60vh] py-16 px-20 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-4xl">Credit</h1>
      <p className="text-center text-2xl">
        All resources used in this project does not violate any copyright😉
      </p>
      <section className="flex gap-8 flex-wrap mt-12 w-full justify-center">
        <Card
          title="React"
          license="MIT"
          url="https://github.com/facebook/react/blob/main/LICENSE"
          color="bg-cyan-400"
        />
        <Card
          title="NextJS"
          license="MIT"
          url="https://github.com/vercel/next.js/blob/canary/license.md"
          color="bg-zinc-900"
        />
        <Card
          title="Tailwind CSS"
          license="MIT"
          url="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE"
          color="bg-teal-500"
        />
        <Card
          title="React Icon"
          license="[Depends on MDIcons and Bootstrap Icons]"
          url="https://github.com/react-icons/react-icons/blob/master/LICENSE"
          color="bg-pink-500"
        />
        <Card
          title="Material Design Icons"
          license="Apache License Version 2.0"
          url="http://google.github.io/material-design-icons/"
          color="bg-blue-700"
        />
        <Card
          title="Bootstrap Icons"
          license="MIT"
          url="https://github.com/twbs/icons"
          color="bg-violet-600"
        />
        <Card
          title="React Reveal"
          license="MIT"
          url="https://github.com/rnosov/react-reveal/blob/master/LICENSE.txt"
          color="bg-sky-400"
        />
        <Card
          title="Unsplash"
          license="Free Commercial"
          url="https://unsplash.com/license"
          color="bg-zinc-900"
        />
      </section>
    </div>
  );
};

export default function Credit() {
  return (
    <div>
      <Head>
        <title>Credit</title>
        <meta name="description" content="Resource used in this website" />
      </Head>

      <main className="overflow-hidden font-nunito flex flex-col">
        <Navbar />
        <Main />
      </main>
      <Footer />
    </div>
  );
}
