import { combineReducers } from "redux";
import registerReducer from "../components/signup/redux/reducer";
import loginReducer from "../components/signin/redux/reducer";


const appReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer
});

const rootReducer = (state, action) =>{

    return appReducer(state, action)
};

export default rootReducer

