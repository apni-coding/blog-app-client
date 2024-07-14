import { combineReducers } from "redux";
import registerReducer from "../components/signup/redux/reducer";
import loginReducer from "../components/signin/redux/reducer";
import createPostReducer from "../components/post/createPost/redux/reducer";
import postsReducer from "../components/home/redux/reducer";


const appReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    createPostReducer:createPostReducer,
    postsReducer:postsReducer
});

const rootReducer = (state, action) =>{

    return appReducer(state, action)
};

export default rootReducer

