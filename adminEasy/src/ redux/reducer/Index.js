import { combineReducers } from "redux";
import { FaqReducerAdd } from "./Faq.Reducer";

export const rootReducer = combineReducers({
    FaqReducer: FaqReducerAdd,
})