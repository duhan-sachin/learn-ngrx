import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationMessage } from '../@model/model';
import { add_new_notification } from '../@state/notification/notification.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private notificationState: Store<{ notifications: NotificationMessage }>) { }

    ngOnInit() { }
    onSubmit(data) {
        const notification: NotificationMessage = {
            message: data,
            _id: data,
        }
        this.notificationState.dispatch(add_new_notification({ notification: notification }));
    }
}
