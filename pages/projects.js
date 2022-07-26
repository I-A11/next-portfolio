import React from "react";
import Image from "next/image";
import HomeHero from "../components/home/HomeHero";
import styles from "./projects.module.css";
import ProjectCard from "../components/projects/ProjectCard";
import CryptoGalaxy from "../assets/projects/crypto-galaxy.PNG";
import MovieStudio from "../assets/projects/movie-studio.PNG";

const projects = () => {
  return (
    <div>
      <HomeHero />
      <div className={styles.projectsSection}>
        <div className={`container ${styles.projectsContainer}`}>
          <h1>React Projects</h1>
          <div className={styles.reactProjects}>
            <ProjectCard
              image={MovieStudio}
              title={"Movie Studio"}
              href={"https://boring-curran-3dad89.netlify.app/"}
              project={"https://github.com/I-A11/Movie-Studio"}
            />
            <ProjectCard
              image={CryptoGalaxy}
              title={"Crypto Galaxy"}
              href={"https://crypto-galaxy-11.netlify.app/"}
              project={"https://github.com/I-A11/crypto-galaxy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
