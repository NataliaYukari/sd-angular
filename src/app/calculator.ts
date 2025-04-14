import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router'; 

@Component({
    selector: 'app-calculator',
    imports: [FormsModule, CommonModule, RouterOutlet],
    styleUrl: './app.component.css',
    template: `
        <div style= "padding: 20px; max-widt: 400px;">
            <h2>Calculadora</h2>
            <input [(ngModel)]="first_number" placeholder="Digite um número:"/>
            <input [(ngModel)]="operator" placeholder="Digite a operação desejada [+ - * /]"/>
            <input [(ngModel)]="second_number" placeholder="Digite outro número:"/>
            <button (click)="getResult()">Calcular</button>

            <div *ngIf="second_number">
                <p><strong>Resultado:</strong> {{ result }} </p>
            </div>
        </div>
    `
})
export class Calculator {
    first_number: number = 0;
    second_number: number = 0;
    result: number = 0;
    operator: string = '';

    getResult() {
        const number1 = Number(this.first_number);
        const number2 = Number(this.second_number);

        if (this.operator == '+') {
            this.result = number1 + number2;
        } else if (this.operator == '-') {
            this.result = number1 - number2;
        } else if (this.operator == '*') {
            this.result = number1 * number2
        } else if (this.operator == '/') {
            this.result = number1 / number2
        } 
    }
}