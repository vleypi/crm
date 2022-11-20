import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { auth } from "../controllers/authController/authController";

export const AuthProvider  = (props) => {

    const dispatch = useDispatch()
    const user_id = useSelector(({profile})=>profile.user_id)

    useEffect(()=>{
        if(!user_id){
            auth(dispatch)
        }
    })

    return (
        <>
            {props.children}
        </>
    );
};

export default AuthProvider;