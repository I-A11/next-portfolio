import React from "react";
import styles from "./HomeHero.module.css";
import { useGlobalContext } from "../context";

const HomeHero = () => {
  const data = useGlobalContext();
  // console.log(data);
  return <div className={styles.heroContainer}>HomeHero</div>;
};

export default HomeHero;
