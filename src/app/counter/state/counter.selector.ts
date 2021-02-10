import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterInterface } from "src/app/@model/model";

const getCounterState = createFeatureSelector<counterInterface>('counter');

export const getCounter = createSelector(getCounterState, state => {
    return state.counter;
});

export const getUserName = createSelector(getCounterState, state => {
    return state.userName;
});