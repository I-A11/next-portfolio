import React from "react";
import styles from "./Skills.module.css";
import { MdArrowRight } from "react-icons/md";

const Skills = () => {
  return (
    <div className={`container ${styles.technologiesContainer}`}>
      <h2>Skills</h2>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className={`container${styles.technologies}`}>
        <div>
          <div className={styles.tech}>
            <MdArrowRight /> HTML
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> CSS
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> Tailwind
          </div>
        </div>
        <div>
          <div className={styles.tech}>
            <MdArrowRight /> JavaScript
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> React Js
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> Next Js
          </div>
        </div>
        <div>
          <div className={styles.tech}>
            <MdArrowRight /> Bootstrap
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> Vue Js
          </div>
          <div className={styles.tech}>
            <MdArrowRight /> Git
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
