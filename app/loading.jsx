import React from 'react'
import styles from './styles/Loading.module.css'
import Image from 'next/image'

function Loading() {
  
  return (
    <div className={styles.container}>
      <div className={styles.loaderImg}>
        <Image src={"/images/loader.png"} alt='Image of Layi holding cooking utensils' width={200} height={150} priority={true} />
      </div>
      <div className={styles.loaderMsg}>
      <Image src="/loader.svg" height={50} width={50} alt=''/>
      <p>Cooking...</p>
      {/* 😤 */}
      </div>
    </div>
  )
}

export default Loading