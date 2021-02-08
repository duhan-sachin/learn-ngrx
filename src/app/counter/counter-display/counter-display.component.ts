import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-counter-display',
    templateUrl: './counter-display.component.html',
    styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
    private counter: number = 0;

    counterSubscription: Subscription;
    constructor(private counterState: Store<{ counter: { counter: 0 } }>) { }
    ngOnInit() { this.counterSubscription = this.counterState.select('counter').subscribe(data => this.counter = data.counter); }

    ngOnDestroy() {
        if (this.counterSubscription) this.counterSubscription.unsubscribe();
    }
}
