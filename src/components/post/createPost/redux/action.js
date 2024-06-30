export const CREATE_POST_REQUREST = 'CREATE_POST_REQUREST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const createPostRrequest = ()=>{
    return {type: CREATE_POST_REQUREST}
}

export const createPostSuccess = (post)=>{
    return {type: CREATE_POST_SUCCESS, payload: post}
}

export const createPostFailure = (error)=>{
    return {type: CREATE_POST_FAILURE, payload: error}
}