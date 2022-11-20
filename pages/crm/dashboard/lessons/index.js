import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from '../../../../components/Container/Container'
import Lessons from '../../../../components/Lessons/Lessons'
import { getLessons } from '../../../../controllers/pagesController/getLessons'
import { setLessonsState } from '../../../../store/slices/lessonsSlice'

const statuses = (props) => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setLessonsState(props))
    },[])

    return (
        <Container title="Занятия" header="Занятия">
            <Lessons lessons={props.lessons}/>
        </Container>
    )
}

export default statuses

export const getServerSideProps = async (ctx) => {
    const server = await getLessons(ctx)
    return server
}