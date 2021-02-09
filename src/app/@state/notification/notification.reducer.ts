import { createReducer, on } from "@ngrx/store";
import { initial_notification_state } from './notification.state';
import * as _action from './notification.actions';

const __notification_reducer = createReducer(
    initial_notification_state,
    on(_action.add_new_notification, (state, action) => {
        return {
            ...state,
            notifications: [action.notification, ...state.notifications]
        }
    }),
    on(_action.remove_notification, (state, action) => {
        const _notifications = state.notifications;
        let index = _notifications.findIndex(obj => obj._id === action.notification._id);
        if (index > -1) _notifications.splice(index, 1);
        return {
            ...state,
            notifications: _notifications
        }
    }),
    on(_action.update_notification, (state, action) => {
        const _notifications = state.notifications;
        let index = _notifications.findIndex(obj => obj._id === action.notification._id);
        if (index > -1) {
            _notifications.splice(index, 1);
            _notifications.unshift(action.notification);
        }
        return {
            ...state,
            notifications: _notifications
        }
    })
)

export const notificationReducer = (state, action) => {
    return __notification_reducer(state, action);
}