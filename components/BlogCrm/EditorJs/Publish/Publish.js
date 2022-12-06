import { useDispatch, useSelector } from 'react-redux'
import { publishPost } from '../../../../controllers/blogController/publishPost'


const Publish = ({styles}) => {

    const editorState = useSelector(({editor})=>editor)

    const publish = async () =>{
        await publishPost(editorState)
    }


    return (
            <div className={styles.buttons}>
                <button disabled={!(editorState.header && editorState.blocks.blocks.length)} onClick={publish}>
                    Опубликовать
                </button>
            </div>
    )
}

export default Publish