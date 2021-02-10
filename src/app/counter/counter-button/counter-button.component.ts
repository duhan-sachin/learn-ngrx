import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@store/app.store';
import { decrement, increment, reset, updateUserName } from '../@state/counter.actions';

@Component({
    selector: 'app-counter-button',
    templateUrl: './counter-button.component.html',
    styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
    constructor(private appStore: Store<AppState>) { }

    ngOnInit() { }

    onIncrement(): void { this.appStore.dispatch(increment()); }
    onDecrement(): void { this.appStore.dispatch(decrement()); }
    onReset(): void { this.appStore.dispatch(reset()); }

    updateUserName(data: string): void {
        if (!data) return;
        this.appStore.dispatch(updateUserName({ userName: data }));
    }
}
