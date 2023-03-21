import { combineReducers } from "redux";
import { FaqReducerAdd } from "./Faq.Reducer";
import { PinReducer } from "./Pin.Reducer";

export const rootReducer = combineReducers({
    FaqReducer: FaqReducerAdd,
    PinData: PinReducer,
})