import { combineReducers } from "redux";
import { Counter } from "./Counter.Reducer";



export const rootReducer =combineReducers({
    counterDig: Counter
})