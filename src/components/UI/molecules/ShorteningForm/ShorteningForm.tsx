import React from 'react'
import { Button } from '../../atoms'
import styles from './ShorteningForm.module.scss'

function ShorteningForm() {

    return (
        <form className={styles.form}>
            <input className={styles.form__input} type="text" placeholder='Shorten a link here...' />
            <Button text={'Shorten it!'} />
        </form>
    )
}

export default ShorteningForm