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
              <FaHtml5 color='#fcb404' />
            </div>
            <div>HTML</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <DiCss3 color='	#264de4' />
            </div>
            <div>CSS</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <SiTailwindcss color='#38bdf8' />
            </div>
            <div>Tailwind</div>
          </div>
        </div>
        <div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <SiJavascript color='f0db4f' />
            </div>
            <div>JavaScript</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaReact color='#61dbfb' />
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
              <SiBootstrap color='#563d7c' />
            </div>
            <div>Bootstrap</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaVuejs color='#42b883' />
            </div>
            <div>Vue Js</div>
          </div>
          <div className={styles.tech}>
            <div className={styles.techIcon}>
              <FaGitAlt color='#F1502F' />
            </div>
            <div> Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
