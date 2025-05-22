import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { CharCount } from './charCount'; 
import { Calculator } from './calculator';
import { CepCheckerComponent } from './cepChecker';

import { PageTitleComponent } from '../visual components/pageTitle.component';
import { AppCardComponent } from '../visual components/appCard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageTitleComponent, RouterModule, AppCardComponent, CepCheckerComponent, CharCount, Calculator],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
