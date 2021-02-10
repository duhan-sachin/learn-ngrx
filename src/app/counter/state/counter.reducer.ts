import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, updateUserName } from "./counter.actions";
import { initialState } from "./counter.state";

const _counteReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
            userName : "No username"
        }
    }),
    on(updateUserName, (state, action) => {
        return {
            ...state,
            userName: action.userName
        }
    })
)

export const counterReducer = (state, action) => {
    return _counteReducer(state, action);
}