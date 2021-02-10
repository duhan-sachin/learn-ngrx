import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationState } from "src/app/@model/model";

const getNotificationState = createFeatureSelector<NotificationState>('notifications');

export const get_all_notifcations = createSelector(getNotificationState, state => {
    return state.notifications
});