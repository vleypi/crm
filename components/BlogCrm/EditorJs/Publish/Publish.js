import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost } from '../../../../controllers/blogController/deletePost'
import { publishPost } from '../../../../controllers/blogController/publishPost'


const Publish = ({styles,blocks,blog,header}) => {

    const router = useRouter()


    const publishHandler = async () =>{
        await publishPost(blocks,header,blog.blog_id)
        router.replace('/crm/dashboard/blog')
    }

    const deleteHandler = async () =>{
        await deletePost(blog.blog_id)
        router.replace('/crm/dashboard/blog')
    }

    return (
            <div className={styles.buttons}>
                <button disabled={!header && !blocks.length} onClick={publishHandler}>
                    {blog.blog_id ? 'Сохранить' : 'Опубликовать'}
                </button>
                {blog.blog_id &&
                    <button style={{background: 'rgb(250, 134, 134)',border: '1px red solid',marginLeft: 20}} onClick={deleteHandler}>
                        Удалить
                    </button>
                }
            </div>
    )
}

export default Publish