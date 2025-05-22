import { Routes } from '@angular/router';
import { CharCount } from './charCount';
import { Calculator } from './calculator';
import { AppComponent } from './app.component';
import { CepCheckerComponent } from './cepChecker';

export const routes: Routes = [
    { path: 'charCount', component: CharCount },
    { path: 'calculator', component: Calculator },
    { path: 'cepChecker', component: CepCheckerComponent }
];
