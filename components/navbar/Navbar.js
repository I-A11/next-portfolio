import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SiProbot } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar, systemTheme, theme, setTheme } = useGlobalContext();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mount) return null;

    if (currentTheme === "dark") {
      return (
        <button className={styles.lightMode} onClick={() => setTheme("light")}>
          <BsFillSunFill />
        </button>
      );
    } else {
      return (
        <button className={styles.darkMode} onClick={() => setTheme("dark")}>
          <RiMoonFill />
        </button>
      );
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logoLink}>
              <SiProbot size={30} className={styles.logoRobot} />
              <div className={styles.logoText}>Islam Aboamh</div>
            </div>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href='/'>
            <div className={styles.navListLink}>
              <div>Home</div>
            </div>
          </Link>
          <Link href='/'>
            <div className={styles.navListLink}>
              <div>Projects</div>
            </div>
          </Link>
          <Link href='/'>
            <div className={styles.navListLink}>
              <div>Source</div>
            </div>
          </Link>
        </div>
        <div className={styles.mobileNav}>
          {renderThemeChanger()}
          <button className={styles.navToggle} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
