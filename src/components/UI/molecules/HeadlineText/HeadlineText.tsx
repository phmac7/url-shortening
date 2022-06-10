import React from 'react'
import styles from './HeadlineText.module.scss'

function HeadlineText() {
    return (
        <div className={styles.headlinetext}>
            <h1 className={styles.headlinetext__title}>
                More than just shorter links
            </h1>
            <p className={styles.headlinetext__p}>
                Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
        </div>
    )
}

export default HeadlineText