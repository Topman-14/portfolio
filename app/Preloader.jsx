"use client"
import React from 'react';
import styles from './styles/Loading.module.css';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

function Preloader() {
  return (
    <AnimatePresence mode='wait'>
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      className={styles.container}
    >
      <div className={styles.loaderImg}>
        <Image src="/images/loader.png" alt="Image of Layi holding cooking utensils" width={200} height={150} priority={true} />
      </div>
      <div className={styles.loaderMsg}>
        <Image src="/loader.svg" height={50} width={50} alt="" />
        <p>Cooking...</p>
        {/* 😤 */}
      </div>
    </motion.div>
  </AnimatePresence>
  );
}

export default Preloader;
