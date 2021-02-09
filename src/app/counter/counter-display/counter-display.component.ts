import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterInterface } from 'src/app/@model/model';

@Component({
    selector: 'app-counter-display',
    templateUrl: './counter-display.component.html',
    styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
    constructor(private counterState: Store<{ counter: counterInterface }>) { }

    counter$: Observable<counterInterface>;
    ngOnInit() {
        this.counter$ = this.counterState.select('counter');
    }
}
