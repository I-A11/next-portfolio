import React from "react";
import HomeHero from "../components/home/HomeHero";
import styles from "./projects.module.css";
import ProjectCard from "../components/projects/ProjectCard";
import CryptoGalaxy from "../assets/projects/crypto-galaxy.PNG";
import MovieStudio from "../assets/projects/movie-studio.PNG";
import PortfolioV1 from "../assets/projects/portfolio-v1.PNG";
import TaskHunter from "../assets/projects/taskhunter-1.PNG";
import SportSociety from "../assets/projects/sport-society.PNG";
import MoviesClub from "../assets/projects/Movies-club.PNG";
import Tetris from "../assets/projects/tetris.png";
import FutureTechnology from "../assets/projects/future-technology.PNG";

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
              projectCode={"https://github.com/I-A11/Movie-Studio"}
            />
            <ProjectCard
              image={CryptoGalaxy}
              title={"Crypto Galaxy"}
              href={"https://crypto-galaxy-11.netlify.app/"}
              projectCode={"https://github.com/I-A11/crypto-galaxy"}
            />
          </div>
          <h1>JavaScript Projects</h1>
          <div className={styles.reactProjects}>
            <ProjectCard
              image={PortfolioV1}
              title={"Portfolio Version 1"}
              href={"https://islam-aboamh.netlify.app/"}
              projectCode={"https://github.com/I-A11/Portfolio"}
            />
            <ProjectCard
              image={SportSociety}
              title={"Sport Society"}
              href={"https://sportsociety.netlify.app/"}
              projectCode={"https://github.com/I-A11/Sport-Society"}
            />
          </div>
          <div className={styles.reactProjects}>
            <ProjectCard
              image={TaskHunter}
              title={"Task Hunter"}
              href={"https://task-hunter.netlify.app/"}
              projectCode={"https://github.com/I-A11/Task-Hunter"}
            />
            <ProjectCard
              image={MoviesClub}
              title={"Movies Club "}
              href={"https://moviesclub.netlify.app/"}
              projectCode={"https://github.com/I-A11/MoviesClub"}
            />
          </div>
          <div className={styles.reactProjects}>
            <ProjectCard
              image={Tetris}
              title={"Tetris"}
              href={"https://quizzical-ptolemy-8ea29d.netlify.app/"}
              projectCode={"https://github.com/I-A11/Tetris-Game"}
            />
            <ProjectCard
              image={FutureTechnology}
              title={"Future Technology "}
              href={"https://future-new-technology.netlify.app/index.html"}
              projectCode={"https://github.com/I-A11/Future-Technology"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
