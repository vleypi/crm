import { useState } from "react"
import styles from '../../styles/blog_crm/blog.module.css'
import blog from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'
import Image from "next/image"
import { useRouter } from "next/router"

const BlogCrm = (props) => {

    const router = useRouter()

    return (
        <div className={styles.blog}>
            <div className={styles.header}>
                <p>Все записи</p>
                <button className={styles.button} onClick={()=>router.push('blog/create')}>
                    Добавить
                </button>
            </div>
            <div className={styles.blogs}>
                <div className={styles.post}>
                    <div className={styles.mainImgPost}>
                            <Image src={blog} />
                        </div>
                        <div className={styles.headerPost}>
                            <h2>7 ПОЛЕЗНЫХ ПРИВЫЧЕК В ИЗУЧЕНИИ ЯЗЫКА</h2>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.mainImgPost}>
                        <Image src={blog2}/>
                    </div>
                    <div className={styles.headerPost}>
                        <h2>ТОП 5 ЛАЙФХАКОВ В ИЗУЧЕНИИ КИТАЙСКОГО ЯЗЫКА</h2>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.mainImgPost}>
                        <Image src={blog3}/>
                    </div>
                    <div className={styles.headerPost}>
                        <h2>10 СОВРЕМЕННЫХ СЕРВИСОВ ДЛЯ ИЗУЧЕНИЯ ИНОСТРАННОГО ЯЗЫКА В 2022г.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCrm