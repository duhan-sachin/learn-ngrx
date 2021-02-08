import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
