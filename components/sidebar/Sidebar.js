import React from "react";
import { useGlobalContext } from "../context";
import Link from "next/link";
import { SiProbot } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className={styles.sidebar}>
        <button className={styles.closeBtn} onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className={styles.logo}>
          <Link href='/'>
            <a onClick={closeSidebar}>
              <SiProbot size={32} className={styles.logoRobot} />
              <div className={styles.logoText}>Islam Aboamh</div>
            </a>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href='/'>
            <a onClick={closeSidebar}>
              <div className={styles.link}>
                <RiDashboardFill className={styles.linkLogo} />
                Projects
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a onClick={closeSidebar}>
              <div className={styles.link}>
                <FaLightbulb className={styles.linkLogo} />
                Skills
              </div>
            </a>
          </Link>
          <Link href='/'>
            <a onClick={closeSidebar}>
              <div className={styles.link}>
                <FaGithub className={styles.linkLogo} />
                Source
              </div>
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
