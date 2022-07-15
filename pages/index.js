import Head from "next/head";
import Image from "next/image";
import HomeHero from "../components/home/HomeHero";
import PageLayout from "../components/layout/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <PageLayout>
      <div className='homeSection'>
        <div className='container'>
          <HomeHero />
        </div>
      </div>
    </PageLayout>
  );
}
