import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/@store/app.store';
import { getCounter } from '../@state/counter.selector';

@Component({
    selector: 'app-counter-display',
    templateUrl: './counter-display.component.html',
    styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
    constructor(private appStore: Store<AppState>) { }

    counter$: Observable<number>;
    ngOnInit() {
        this.counter$ = this.appStore.select(getCounter);
    }
}
