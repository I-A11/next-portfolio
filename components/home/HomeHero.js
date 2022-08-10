import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { MdArrowRight } from "react-icons/md";
import Robot from "../home/robot/Robot";
import IslamImage from "../../assets/islam-1.jpg";
import { motion } from "framer-motion";
import styles from "./HomeHero.module.css";
import Loading from "../loading/Loading";

const HomeHero = () => {
  const [loading, setLoading] = useState(true);

  const loadingTime = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  useEffect(() => {
    loadingTime();
    clearTimeout(loadingTime);
  }, []);

  return (
    <>
      {!loading ? (
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={styles.heroContainer}
        >
          <div className={styles.heroSection}>
            <Canvas className='canvas'>
              <OrbitControls
                autoRotateSpeed={3}
                autoRotate={true}
                enableZoom={false}
              />
              <ambientLight intensity={5} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Robot />
              </Suspense>
            </Canvas>
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomeHero;
