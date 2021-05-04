

import styles from '../styles/Home.module.css'
import React from "react";

import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <h1 className={styles.title}>Home Page</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi consequuntur hic laudantium nam nisi quibusdam reiciendis tempore. Animi asperiores atque aut commodi culpa distinctio doloremque ea eaque enim facilis in iusto magnam maxime neque numquam officia pariatur perspiciatis quibusdam ratione, reiciendis rerum similique tenetur unde voluptas voluptatum! Architecto commodi cumque deleniti deserunt dolore doloremque doloribus eligendi error eum fugit ipsum libero nostrum omnis quis recusandae repudiandae, sit tempore vel vero voluptate. Deserunt eum id necessitatibus neque, perferendis quaerat repellat sunt. Aut eveniet iusto minus numquam odit quam sunt vero!</p>
    <p  className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae maiores temporibus praesentium molestiae! Consectetur, sed hic! Autem impedit eius inventore nulla. Nulla aut numquam voluptas cumque. Itaque amet eum aliquid. Tempore animi sunt mollitia iste, doloribus eligendi, nihil omnis ipsam eveniet nemo sequi optio natus quae culpa deleniti aperiam ducimus atque doloremque adipisci molestias consequatur explicabo? Nisi totam incidunt culpa facere, esse rerum, sequi modi ab aut saepe, similique ullam soluta a excepturi qui. Doloremque quo placeat quisquam quas sunt, sapiente neque accusantium praesentium sequi recusandae consequuntur officiis.</p>
    <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur beatae maiores temporibus praesentium molestiae! Consectetur, sed hic! Autem impedit eius inventore nulla. Nulla aut numquam voluptas cumque. Itaque amet eum aliquid. Tempore animi sunt mollitia iste, doloribus eligendi, nihil omnis ipsam eveniet nemo sequi optio natus quae culpa deleniti aperiam ducimus atque doloremque adipisci molestias consequatur explicabo? Nisi totam incidunt culpa facere, esse rerum, sequi modi ab aut saepe, similique ullam soluta a excepturi qui. Doloremque quo placeat quisquam quas sunt, sapiente neque accusantium praesentium sequi recusandae consequuntur officiis.</p>
     <Link  href="/ninjas">
    <a className={styles.btn}>see more Ninjas</a>
    </Link>
    </div>
    

    
  )
}
