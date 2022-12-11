import { useMemo } from "react"
import BlogCrm from "../../../../../components/BlogCrm/Blog"
import Container from "../../../../../components/Container/Container"
import dynamic from "next/dynamic"
import { getEditor } from "../../../../../controllers/pagesController/getEditor"

let Editor

if(typeof window !== "undefined"){
    Editor = dynamic(()=>import('../../../../../components/BlogCrm/EditorJs/Editor'),{
        ssr: true
    })
}

const Blog = (props) =>{
    return(
        <Container title='Создать запись' header='Создать запись' role={props.role}>
            {Editor && <Editor blog={props.blog}/>}
        </Container>
    )
}

export default Blog

export const getServerSideProps = async (ctx) => {
    const server = getEditor(ctx)
    return server
}