
import * as ActionType from '../ActionType'

export const IncrementCount = () => (dispatch) => {
    dispatch({ type:ActionType.INCREMENT_COUNT, payload: 0 })
}

export const DecrementCount = () => (dispatch) => {
    dispatch({type:ActionType.DECREMENT_COUNT, payload : 0})
}