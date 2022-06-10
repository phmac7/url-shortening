import React from 'react'
import { Header, Headline, ShortenSection } from '../../UI/organisms'
import styles from './Home.module.scss'

function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Headline />
            <ShortenSection/>
        </div>
    )
}

export default Home