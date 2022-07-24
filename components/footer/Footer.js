import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.underline}></div>

      <div className={` container ${styles.footerContainer}`}>
        <h1>Get In Touch</h1>
        <p>
          If you have any opportunities, questions or if you just want to say
          hi, please feel free to contact me.
        </p>
        <div className={styles.socialIcons}>
          <Link href='https://www.linkedin.com/in/islam-aboamh/'>
            <a target='_blank'>
              <BsLinkedin size={40} className={styles.socialLinkedin} />
            </a>
          </Link>
          <Link href='https://github.com/I-A11'>
            <a target='_blank'>
              <BsGithub size={40} className={styles.socialGithub} />
            </a>
          </Link>
        </div>
        <Link href='mailto:d.islam1983@gmail.com'>
          <button className={styles.footerBtn}>Send email</button>
        </Link>
        <div className={styles.robotLicense}>
          <strong>3D Robot</strong> work is based on "Robot Steampunk 3D-Coat
          4.5 PBR"
          (https://sketchfab.com/3d-models/robot-steampunk-3d-coat-45-pbr-91eb0eb061024bf1bc5e3eb5ffe385d8)
          by 3d-coat (https://sketchfab.com/3d-coat) licensed under CC-BY-4.0
          (http://creativecommons.org/licenses/by/4.0/)
        </div>
      </div>
    </div>
  );
};

export default Footer;
