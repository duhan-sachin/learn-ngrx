import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, updateUserName } from '../state/counter.actions';
import { getUserName } from '../state/counter.selector';

@Component({
    selector: 'app-counter-button',
    templateUrl: './counter-button.component.html',
    styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
    constructor(private counterState: Store<{ counter: { counter: 0 } }>) { }
    ngOnInit() { }

    onIncrement(): void { this.counterState.dispatch(increment()); }
    onDecrement(): void { this.counterState.dispatch(decrement()); }
    onReset(): void { this.counterState.dispatch(reset()); }

    updateUserName(data: string): void {
        if (!data) return;
        this.counterState.dispatch(updateUserName({ userName: data }));
    }
}
