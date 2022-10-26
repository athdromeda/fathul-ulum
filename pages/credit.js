import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Card = ({ title, url, color }) => {
  return (
      <a href={url} className={"font-bold text-lg text-white px-4 py-2 rounded-lg "+color}>{title}</a>
  );
};
const Main = () => {
  return (
    <div className="py-16 px-20 flex flex-col items-center">
      <h1 className="text-center font-bold text-4xl">Credit</h1>
      <p className="text-center text-2xl">All resources used in this project does not violate any copyright😉</p>
      <section className="flex gap-4 mt-12">
        <Card title="React" url="https://reactjs.org" color="bg-cyan-400"/>
        <Card title="NextJS" url="https://nextjs.org" color="bg-zinc-900"/>
        <Card title="Tailwind CSS" url="https://tailwindcss.com" color="bg-teal-500"/>
        <Card title="React Icon" url="https://react-icons.github.io/react-icons/" color="bg-pink-500" />
        <Card title="Material Design Icons" license="Apache License Version 2.0" url="http://google.github.io/material-design-icons/" color="bg-blue-700" />
        <Card title="Bootstrap Icons" license="MIT" url="https://github.com/twbs/icons" color="bg-violet-600" />
        <Card title="React Reveal" url="https://react-reveal.com" color="bg-sky-400"/>
        <Card title="Unsplash" license="Free Commercial" url="https://unsplash.com/license" color="bg-zinc-900" />
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden font-nunito flex flex-col">
        <Navbar />
        <Main />
      </main>
      <Footer />
    </div>
  );
}
