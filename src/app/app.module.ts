import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { appReducer } from './@store/app.store';

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
        StoreModule.forRoot(appReducer),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
