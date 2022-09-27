import React from "react";
import Image from "next/image";
import Link from "next/link";
import IslamImage from "../../assets/islam-1.jpg";

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h1>
          Hello, I am <span className={styles.aboutName}>Islam Aboamh </span>
        </h1>
        <h2>I am a front-end web developer </h2>
      </div>
      <div className={`container ${styles.infoContainer}`}>
        <div className={styles.infoText}>
          <div className={styles.infoAbout}>About Me</div>
          <div className={styles.underline}></div>
          <div className={styles.infoText}>
            Creative Front-End Developer with experience building responsive
            websites and apps in fast-paced, collaborative environment. Talented
            in HTML/CSS/JavaScript/React.js and Next.js. Familiar with Scrum and
            Agile.
          </div>
        </div>
        <div className={styles.infoImage}>
          <Image src={IslamImage} alt='Islam image' />
        </div>
      </div>

      <Link href='/projects'>
        <button className={styles.infoBtn}>My Projects</button>
      </Link>
    </div>
  );
};

export default About;
