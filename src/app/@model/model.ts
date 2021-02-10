export interface NotificationState {
    notifications: NotificationMessage[],
}

export interface NotificationMessage {
    _id?: string,
    message: string,
    description?: string,
    message_date?: string,
    message_time?: string,
    is_error_occurred?: boolean,
    error_message?: string,
    is_navigation?: boolean,
    navigate_to?: string,
    process_type?: string
}

export interface counterInterface {
    counter: number,
    userName : string
}