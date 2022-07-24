import React from "react";
import styles from "./Skills.module.css";
import { FaHtml5, FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiBootstrap } from "react-icons/si";

const Skills = () => {
  return (
    <div className={`container ${styles.technologiesContainer}`}>
      <h2>Skills</h2>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className={styles.technologies}>
        <div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaHtml5 />
            </div>
            <div>HTML</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <DiCss3 />
            </div>
            <div>CSS</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <SiTailwindcss />
            </div>
            <div>Tailwind</div>
          </div>
        </div>
        <div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <SiJavascript />
            </div>
            <div>JavaScript</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaReact />
            </div>
            <div>React Js</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <TbBrandNextjs />
            </div>
            <div> Next Js</div>
          </div>
        </div>
        <div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <SiBootstrap />
            </div>
            <div>Bootstrap</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaVuejs />
            </div>
            <div>Vue Js</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaGitAlt />
            </div>
            <div> Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
