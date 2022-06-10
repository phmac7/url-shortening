import React from 'react'
import { Button } from '../../atoms'
import { HeadlineText } from '../../molecules'
import styles from './Headline.module.scss'
import WorkingPerson from '/assets/illustration-working.svg'

function Headline() {

    return (
        <section className={styles.headline}>
            <div className={styles.headlineContainer}>
                <div className={styles.headline__imgContainer}>
                    <img className={styles.headline__img} src={WorkingPerson} alt="An illustration of a person in front of a computer, apparently working." />
                </div>
                <div className={styles.headline__text}>
                    <HeadlineText />
                    <Button text={'Get Started'} rounded={true} />
                </div>
            </div>
        </section>
    )
}

export default Headline