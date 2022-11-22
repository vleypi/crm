import { useMemo } from "react"
import BlogCrm from "../../../../components/BlogCrm/Blog"
import Container from "../../../../components/Container/Container"

const Blog = () =>{

    return(
        <Container title='Блог' header='Блог'>
            <BlogCrm />
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