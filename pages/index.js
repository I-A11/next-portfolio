import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
import HomeHero from "../components/home/HomeHero";
import Skills from "../components/skills/Skills";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <About />
      <Skills />
    </div>
  );
}
