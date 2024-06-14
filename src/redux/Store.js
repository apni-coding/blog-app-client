import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers";
import { thunk } from "redux-thunk";
import { authMiddleware } from "../middleware/authMiddleware";


const store = createStore(rootReducer, applyMiddleware(thunk, authMiddleware));

export default store;