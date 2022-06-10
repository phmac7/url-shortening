import React from 'react'
import styles from './Button.module.scss'

interface Props {
    text: string,
    rounded?: boolean,
    onClick?: () => void
}

function Button({ text, rounded = false, onClick }: Props) {
    const getOnClick = () => {
        onClick ? onClick() : null
    }


    return (
        <button onClick={getOnClick} className={`${styles.button} ${rounded ? styles['button--rounded'] : ''}`}>
            {text}
        </button>
    )
}

export default Button