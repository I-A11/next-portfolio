import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ image, title, href, project }) => {
  return (
    <div className={styles.cardSection}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <Image
            width={500}
            height={300}
            src={image}
            alt={title}
            layout='responsive'
            objectFit='fill'
          />
        </div>
        <h3>{title}</h3>
        <div className={styles.cardText}>
          <a className={styles.cardLink} href={href} target='_blank'>
            View Project
          </a>
          <a className={styles.cardSource} href={project} target='_blank'>
            Code
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;
