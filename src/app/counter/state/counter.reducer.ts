import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";
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
            counter: 0
        }
    })
)

export const counterReducer = (state, action) => {
    return _counteReducer(state, action);
}