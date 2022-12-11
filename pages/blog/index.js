import { getBlog } from "../../controllers/pagesController/getBlog"

import dynamic from "next/dynamic"

let BlogPage

if(typeof window !== "undefined"){
    BlogPage = dynamic(()=>import('../../components/BlogPage/Blog'),{
        ssr: false
    })
}

const Blog = (props) =>{
    return(
        <>{BlogPage && <BlogPage posts={props.posts} />}</>
    )
}

export default Blog

export const getServerSideProps = async (ctx) => {
    const server = getBlog(ctx)
    return server
}