import { createPostFailure, createPostRrequest, createPostSuccess } from "./action";
import apiEndPoints from "../../../../utils/apiList";
import toast from "react-hot-toast";
import { serverCall } from "../../../../utils/serverCall";


export const createPost = (data) =>{
    return async (dispatch)=>{
        dispatch(createPostRrequest());

        try {
            let result = await serverCall(apiEndPoints.POST_CREATE, 'POST', data);
            if(  result.data ){
                toast.success('Post create successfully')
                dispatch(createPostSuccess(result.data))
            }else{
                toast.error(result.message)
                dispatch(createPostFailure(result.message))
            }
        } catch (error) {
            toast.error(error.message)
            dispatch(createPostFailure(error.message))
        }
    }
}