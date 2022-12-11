import Output from 'editorjs-react-renderer';
import styles from '../../styles/blog_page/blog.module.css'

const Blog = ({posts}) => {

    const outputPosts = posts.map((post)=>(
        <div className={styles.post}>
            <p className={styles.header}>{post.header}</p>
            <Output data={post} />
        </div>
    ))

    return (
        <div className={styles.blog}>
            {outputPosts}
        </div>
    )
}

export default Blog