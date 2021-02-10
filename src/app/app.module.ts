import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { notificationReducer } from './@state/notification/notification.reducer';
import { FormsModule } from '@angular/forms';
import { counterReducer } from './counter/@state/counter.reducer';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({ notifications: notificationReducer, counter: counterReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
