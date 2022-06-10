import React from 'react'
import styles from './Hamburguer.module.scss'

function Hamburguer() {
    return (
        <button className={styles.hamburguer__button}>
            <span className={styles['hamburguer__icon--up']}></span>
            <span className={styles['hamburguer__icon--middle']}></span>
            <span className={styles['hamburguer__icon--bottom']}></span>
        </button>
    )
}

export default Hamburguer