import {errorGetPostsData, initGetPostsData, setGetPostsData } from "./action";
import toast from "react-hot-toast";
import apiEndPoints from "../../../utils/apiList";
import { serverCall } from "../../../utils/serverCall";


export const getPosts = () =>{
    return async (dispatch)=>{
        dispatch(initGetPostsData());

        try {
            let result = await serverCall(apiEndPoints.POSTS_GET, 'GET');
           
            if(result.success && result.data ){
                dispatch(setGetPostsData(result.data))
            }else{
                toast.error(result.message)
                dispatch(errorGetPostsData(result.message))
            }
        } catch (error) {
            toast.error(error.message)
            dispatch(errorGetPostsData(error.message))
        }
    }
}