import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
    selector: 'app-counter-button',
    templateUrl: './counter-button.component.html',
    styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
    // constructor() { }
    constructor(private counterState: Store<{ counter: { counter: 0 } }>) { }
    ngOnInit() { }

    onIncrement() { this.counterState.dispatch(increment()); }
    onDecrement() { this.counterState.dispatch(decrement()); }
    onReset() { this.counterState.dispatch(reset()); }
}
