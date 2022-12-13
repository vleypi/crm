import { useMemo } from "react"
import BlogCrm from "../../../../components/BlogCrm/Blog"
import Container from "../../../../components/Container/Container"
import { getPosts } from "../../../../controllers/pagesController/getPosts"
import { getProfile } from "../../../../controllers/pagesController/getProfile"

const Blog = (props) =>{

    return(
        <Container title='Блог' header='Блог' role={props.role}>
            <BlogCrm posts={props.posts}/>
        </Container>
    )
}

export default Blog


export const getServerSideProps = async (ctx) => {

    try{
        const posts = await  getPosts(ctx)
        const profile = await getProfile(ctx)

        return {
            props: Object.assign(posts.props,profile.props)
        }
    }
    catch(err){
        const server = getPosts(ctx)
        return server
    }
}