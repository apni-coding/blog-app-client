import { combineReducers } from "redux";
import registerReducer from "../components/signup/redux/reducer";


const appReducer = combineReducers({
    registerReducer: registerReducer
});

const rootReducer = (state, action) =>{

    return appReducer(state, action)
};

export default rootReducer

