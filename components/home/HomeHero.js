import React, { useState } from "react";
import Image from "next/dist/client/image";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "../home/robot/Robot";
import IslamImage from "../../assats/islam-1.jpg";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroSection}>
        <Canvas className='canvas'>
          <OrbitControls
            autoRotateSpeed={3}
            autoRotate={true}
            enableZoom={false}
          />
          <ambientLight intensity={5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Robot />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1>
            Hello, I'm <span className={styles.aboutName}>Islam Aboamh </span>{" "}
          </h1>
          <h2>I'm a front-end web developer </h2>
        </div>
        <div className={`container ${styles.infoContainer}`}>
          <div className={styles.infoText}>
            <div className={styles.infoAbout}>About Me</div>
            <div className={styles.underline}></div>
            <div className={styles.infoText}>
              Creative Front-End Developer with experience building responsive
              websites and apps in fast-paced, collaborative environment.
              Talented in HTML/CSS/JavaScript/React.js and Next.js. Familiar in
              Scrum and Agile.
            </div>
          </div>
          <div className={styles.infoImage}>
            <Image src={IslamImage} alt='Islam image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
