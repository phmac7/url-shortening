import React from 'react'
import { Hamburguer, Logo } from '../../atoms'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Hamburguer />
        </header>
    )
}

export default Header