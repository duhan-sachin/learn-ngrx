import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const updateUserName = createAction('updateUserName', props<{ userName: string }>());
export const decrement = createAction('decrement');
export const reset = createAction('reset');