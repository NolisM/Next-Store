'use client'

import { useState } from 'react'
import styles from './Description.module.sass'
import Image from 'next/image'
import classNames from 'classnames/bind'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false)
    const HandleClick = () => setBorder(!hasBorder)
    const cx = classNames.bind(styles)
    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder
    })
    console.log(hasBorder)
    return (
        <section className={styles.Description}>
            <button onClick={HandleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image src="/images/description.jpg" alt="production marketplace" width={500} height={300} />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit obcaecati odit enim autem quo molestias harum facilis rem, consectetur aut quisquam, beatae alias atque, vitae id. Nihil rem impedit eaque!</p>

            </div>
        </section>
    )
}