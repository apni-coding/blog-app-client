import apiEndPoints from "../../../utils/apiList";
import { serverCall } from "../../../utils/serverCall";
import { errorRegisterRequestData, initRegisterRequestData, setRegisterRequestData } from "./action"


export const registerUser = (data) =>{
    return async (dispatch)=>{
        dispatch(initRegisterRequestData());

        try {
            let result = await serverCall(apiEndPoints.AUTH_REGISTER, 'POST', data);
            if(result.success &&  result.data ){
                dispatch(setRegisterRequestData(result.data))
            }else{
                dispatch(errorRegisterRequestData(result.message))
            }
        } catch (error) {
            dispatch(errorRegisterRequestData(error.message))
        }
    }
}