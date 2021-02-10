import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterInterface, NotificationMessage, NotificationState } from 'src/app/@model/model';
import { get_all_notifcations } from 'src/app/@state/notification/notification.selector';
import { getUserName } from 'src/app/counter/@state/counter.selector';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    show_notificaitons_dropdown: boolean = false;

    constructor(
        private notificationState: Store<NotificationState>,
        private counterState: Store<counterInterface>
    ) { }

    userName$: Observable<string>;
    all_live_notification$: Observable<NotificationMessage[]>;

    ngOnInit() {
        this.userName$ = this.counterState.select(getUserName);
        this.all_live_notification$ = this.notificationState.select(get_all_notifcations);
    }

}
