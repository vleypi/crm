import React from 'react'
import Container from '../../../../../components/Container/Container'

const Student = ({students}) => {
    return (
        <Container titlte='Ученики' header='Ученики'>
            
        </Container>
    )
}

export default Student

export const getServerSideProps = async (ctx) => {
   return{
        props: {

        }
   }
}