import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
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
      </div>
    </aside>
  );
};

export default Sidebar;
