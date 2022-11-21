import Head from 'next/head'
import React, { Children } from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import styles from '../../styles/container/container.module.css'
import Popup from '../Popup/Popup'

const Container = ({titlte,header,children}) => {
    return (
        <>
            <Head>
                <title>{titlte}</title>
            </Head>

            <div className={styles.contentPage}>
                <Nav />
                <div className={styles.contentMain}>
                    <Header header={header} />
                    <div className={styles.contentUser}>
                        {children}
                    </div>
                </div>
                <Popup />
            </div>
        </>
    )
}

export default Container