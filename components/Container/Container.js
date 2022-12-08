import Head from 'next/head'
import React, { Children } from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import styles from '../../styles/container/container.module.css'
import Popup from '../Popup/Popup'
import { useRouter } from 'next/router'

const Container = ({titlte,header,children,role}) => {

    const router = useRouter()

    // if(!role){
    //     router.replace('/auth')
    // }

    return (
        <>
            <Head>
                <title>{titlte}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;1,300&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles.contentPage}>
                <Nav role={role}/>
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