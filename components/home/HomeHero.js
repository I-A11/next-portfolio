import React from "react";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Robot from "../home/robot/Robot";
import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className={styles.heroContainer}>
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
    </div>
  );
};

export default HomeHero;
