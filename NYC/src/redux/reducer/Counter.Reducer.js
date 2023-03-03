import * as ActionType from '../ActionType'


const InitialiseValue = {
    count: 0
}

export const CounterReducer = (state = InitialiseValue, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,

            }
        case ActionType.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state
    }

}