import { useRouter } from "next/router"
import { useEffect } from "react"
import Auth from "../../components/Auth/Auth"
import { useSelector } from "react-redux"
import { getProfile } from "../../controllers/pagesController/getProfile"
import { getRole } from "../../controllers/pagesController/getRole"


const AuthPage = () =>{
    return(
        <div className="AuthContainer">
            <Auth />
        </div>
    )
}

export default AuthPage

export const getServerSideProps = async (ctx) => {
    try{
        const server = await getRole(ctx)
        return{
            redirect: {
                permanent: false,
                destination: "/crm/dashboard/profile",
            }
        }
    }
    catch(err){
        return{
            props: {
                role: null
            }
        }
    }
}