"use client"

import Image from "next/image"
import styles from '../sass/global-error.module.sass'


export default function GlobalError({ reset }: ErrorPageProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
            <Image
                src='/images/error.jpg'
                width={300}
                height={300}
                alt="Error"
            />
            <p className={styles.Error__message}>Al parecer ha ocurrido un error inesperado</p>
            <button className={styles.Error__button}>Volver a intentar</button>
        </main>
    )

}