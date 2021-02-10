import { counterInterface, NotificationState } from "../@model/model";
import { notificationReducer } from "../@state/notification/notification.reducer";
import { counterReducer } from "../counter/@state/counter.reducer";

export interface AppState {
    notifications: NotificationState,
    counter: counterInterface
}

export const appReducer = {
    notifications: notificationReducer,
    counter: counterReducer
}