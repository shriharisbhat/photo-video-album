import React from 'react';
import styles from './bannertext.module.css'

const BannerText = () => {
    return (
        <div className={styles.textContainer}>
            <h1>Discover the world's best photos & videos</h1>
            <p>Best memories online</p>
        </div>
    )
};

export {BannerText}