import { createAction, props } from "@ngrx/store";
import { NotificationMessage } from "src/app/@model/model";

export const update_notification = createAction('update_notification', props<{ notification: NotificationMessage }>());
export const add_new_notification = createAction('add_new_notification', props<{ notification: NotificationMessage }>());
export const remove_notification = createAction('remove_notification', props<{ notification: NotificationMessage }>());