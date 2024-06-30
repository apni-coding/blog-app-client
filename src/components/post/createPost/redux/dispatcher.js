import axios from "axios";
import { createPostFailure, createPostRrequest, createPostSuccess } from "./action";
import apiEndPoints from "../../../../utils/apiList";
import toast from "react-hot-toast";


export const createPost = (data) =>{
    return async (dispatch)=>{
        dispatch(createPostRrequest());

        try {
            // let result = await serverCall(apiEndPoints.AUTH_LOGIN, 'POST', data);
            // console.log(result)
            const token = localStorage.getItem('authToken')
            console.log(token)
            const headers = {
                'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'multipart/form-data'
            };
            const result = await axios.post(apiEndPoints.POST_CREATE, data, {headers})
            console.log(result)
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