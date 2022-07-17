import React, { useState, useRef } from "react";
import Link from "next/link";
import { SiProbot } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import styles from "./Navbar.module.css";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <SiProbot size={30} className={styles.logoRobot} />
              <div className={styles.logoText}>Islam Aboamh</div>
            </a>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href='/'>
            <a>
              <div>Projects</div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div>Skills</div>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <div>Source</div>
            </a>
          </Link>
        </div>
        <div className={styles.mobileNav}>
          <RiMoonFill className={styles.darkMode} />
          <button className={styles.navToggle} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
