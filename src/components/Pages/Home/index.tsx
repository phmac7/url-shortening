import React from 'react'
import { ShorteningForm } from '../../UI/molecules'
import { Header, Headline } from '../../UI/organisms'
import styles from './Home.module.scss'

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Headline />
            <ShorteningForm />
        </div>
    )
}

export default Home