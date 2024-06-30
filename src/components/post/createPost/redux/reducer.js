import {CREATE_POST_REQUREST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE} from './action'

const initialState = {
    post: null,
    loading: false,
    error: null
};

const createPostReducer = (state=initialState, action)=>{
    switch(action.type){
        case CREATE_POST_REQUREST:
            return {
                ...state,
                isLoading: true,
                error: ''
            }

        case CREATE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                post: action.payload
            }

        case CREATE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                post: ''
            }
        
        default: 
            return state;
    }
};

export default createPostReducer