import * as ActionType from '../ActionType'

const InitialData = {
    pin: [],
    isLoading: false,
    error: null,
}



export const PinReducer = (state = InitialData, action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                pin: action.payload,
            }
        case ActionType.POST_DATA:
            return {
                ...state,
                pin: state.pin.concat(action.payload),
            }
        case ActionType.DELETE_DATA:
            return {
                ...state,
                pin: state.pin.filter((i) => i.id !== action.payload),
            }
        case ActionType.PUT_DATA:
            return {
                ...state,
                pin: state.pin.map((i) => {
                    if (i.id === action.payload.id) {
                        return action.payload
                    } else {
                        return i
                    }

                })
            }
        default:
            return state

    }
}

