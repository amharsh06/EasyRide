import * as ActionType from '../ActionType';
const Initialstate = {
    post: [],
    isLoading: false,
    error: null,
}
export const PostReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state
    }
}