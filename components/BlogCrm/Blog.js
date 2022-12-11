import { useState } from "react"
import styles from '../../styles/blog_crm/blog.module.css'
import { useRouter } from "next/router"

const BlogCrm = (props) => {

    const router = useRouter()


    const posts = props.posts.map((post)=>(
        <div className={styles.post} onClick={()=>router.push(`/crm/dashboard/blog/create?blog_id=${post.blog_id}`)}>
            <div className={styles.mainImgPost}>
                <img src={post.image} />
            </div>
            <div className={styles.headerPost}>
                <h2>{post.header}</h2>
            </div>
        </div>
    ))

    return (
        <div className={styles.blog}>
            <div className={styles.header}>
                <p>Все записи</p>
                <button className={styles.button} onClick={()=>router.push('blog/create')}>
                    Добавить
                </button>
            </div>
            <div className={styles.blogs}>
               {posts}
            </div>
        </div>
    )
}

export default BlogCrm