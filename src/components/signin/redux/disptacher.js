import { errorLoginRequestData, initLoginRequestData, logoutUser, setLoginRequestData } from "./action";
import toast from "react-hot-toast";
import apiEndPoints from "../../../utils/apiList";
import { serverCall } from "../../../utils/serverCall";


export const loginUser = (data) =>{
    return async (dispatch)=>{
        dispatch(initLoginRequestData());

        try {
            let result = await serverCall(apiEndPoints.AUTH_LOGIN, 'POST', data);
            console.log(result)
            if(result.success &&  result.data ){
                const token = result.data.token;
                localStorage.setItem('authToken', token)
                toast.success('User Signup successfully')
                dispatch(setLoginRequestData(result.data))
            }else{
                toast.error(result.message)
                dispatch(errorLoginRequestData(result.message))
            }
        } catch (error) {
            toast.error(error.message)
            dispatch(errorLoginRequestData(error.message))
        }
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        localStorage.removeItem('authToken');
        dispatch(logoutUser());
        toast.success('user logged out successfully')
    }
}