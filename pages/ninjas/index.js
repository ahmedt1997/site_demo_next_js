import styles from "../../styles/Ninjas.module.css"
import Link from 'next/link'
export const   getStaticProps = async  () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const ninjas = await  res.json()
    return {
        props : {
            ninjas
        }
    }

}

import React from 'react';

const Ninjas = ({ninjas}) => {
    return (
        <div>
            <h2 className={styles.text}>All Ninjas</h2>
            {ninjas.map((n)=>(
                <Link key={n.id} href={"/ninjas/"+n.id}>
                    <a className={styles.single}>
                    <h3>{n.name}</h3>
                    </a>
                   
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;



