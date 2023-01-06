import handleCart from './handleCart'
import { combineReducers } from "redux";
import authReducer from "../auth";
import messageReducer from "../message";

const rootReducers = combineReducers({
    handleCart,
    auth: authReducer,
    message: messageReducer
})
export default rootReducers

