import { Routes } from '@angular/router';
import { CharCount } from './char.count';
import { Calculator } from './calculator';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: CharCount},
    { path: 'calculator', component: Calculator}
];
