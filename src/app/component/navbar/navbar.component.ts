import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationMessage } from 'src/app/@model/model';
import { get_all_notifcations } from 'src/app/@state/notification/notification.selector';
import { AppState } from 'src/app/@store/app.store';
import { getUserName } from 'src/app/counter/@state/counter.selector';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    show_notificaitons_dropdown: boolean = false;

    constructor(private appStore: Store<AppState>) { }

    userName$: Observable<string>;
    all_live_notification$: Observable<NotificationMessage[]>;

    ngOnInit() {
        this.userName$ = this.appStore.select(getUserName);
        this.all_live_notification$ = this.appStore.select(get_all_notifcations);
    }

}
