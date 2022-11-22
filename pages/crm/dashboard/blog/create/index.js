import { useMemo } from "react"
import BlogCrm from "../../../../../components/BlogCrm/Blog"
import Container from "../../../../../components/Container/Container"
import dynamic from "next/dynamic"

let Editor

if(typeof window !== "undefined"){
    Editor = dynamic(()=>import('../../../../../components/BlogCrm/EditorJs/Editor'))
}

const Blog = () =>{

    return(
        <Container title='Создать запись' header='Создать запись'>
            {Editor && <Editor />}
        </Container>
    )
}

export default Blog

export const getServerSideProps = async (ctx) => {
    return {
        props: {

        }
    }
}