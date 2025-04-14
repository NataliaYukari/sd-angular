import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { CharCount } from './char.count'; 
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CharCount, Calculator],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistemas Distribuídos - Projeto de Implementação';
}
