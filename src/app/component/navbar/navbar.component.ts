import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationMessage } from 'src/app/@model/model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private notificationState: Store<{ notifications: NotificationMessage[] }>) { }
    show_notificaitons_dropdown: boolean = false;

    current_notifications_count: number = 0;
    all_live_notification$: Observable<NotificationMessage[]>;
    ngOnInit() {
        this.all_live_notification$ = this.notificationState.select('notifications');
    }

}
