import { useState } from 'react'
import Container from '../../../../components/Container/Container'
import Statuses from '../../../../components/Statuses/Statuses'
import { getStatuses } from '../../../../controllers/pagesController/getStatuses'

const statuses = ({statuses,statuses_visits}) => {
    return (
        <Container title="Статусы" header="Статусы">
            <Statuses statuses={statuses} statuses_visits={statuses_visits}/>
        </Container>
    )
}

export default statuses

export const getServerSideProps = async (ctx) => {
    const server = await getStatuses(ctx)
    return server
}