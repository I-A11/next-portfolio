import Head from "next/head";
import Image from "next/image";
import About from "../components/about/about";
import HomeHero from "../components/home/HomeHero";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HomeHero />
      {/* <About /> */}
    </div>
  );
}
