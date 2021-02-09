import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
    declarations: [
        CounterButtonComponent,
        CounterDisplayComponent,
        CounterComponent,
    ],
    imports: [
        CommonModule,
        CounterRoutingModule
    ]
})
export class CounterModule { }
