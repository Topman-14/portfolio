import React from 'react'
import styles from './styles/Loading.module.css'
import Image from 'next/image'

function Loading() {
  
  return (
    <div className={styles.container}>
      <div className={styles.loaderImg}>
        <Image src={"/images/loader.png"} alt='Image of Layi holding cooking utensils' width={300} height={200} priority={true} />
      </div>
      <div className={styles.loaderMsg}>
      <img src="/loader.svg" />
      <p>Cooking...</p>
      {/* 😤 */}
      </div>
    </div>
  )
}

export default Loading