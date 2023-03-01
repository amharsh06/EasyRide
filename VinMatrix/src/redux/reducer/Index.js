import { combineReducers } from "redux";
import { Counter } from "./Counter.Reducer";
import { PostReducer } from "./Post.reducer";



export const rootReducer =combineReducers({
    counterDig: Counter,
    postDig: PostReducer,
})