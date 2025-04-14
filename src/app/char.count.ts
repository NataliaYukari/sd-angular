import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router'; 

@Component({
    selector: 'app-char-count',
    imports: [FormsModule, CommonModule, RouterOutlet],
    styleUrl: './app.component.css',
    template: `
        <div style="padding: 20px; max-width: 400px;">
            <h2>Verificador de Palavra</h2>

            <input [(ngModel)]="user_input" placeholder="Digite uma palavra: " />
            <button (click)="charCounter()">Analisar</button>

            <div *ngIf="user_input">
                <p><strong>Total de caracteres:</strong> {{ char_number }}</p>
                <p><strong>Palíndromo:</strong> {{ is_palindromo }}</p>
            </div>
        </div>
        `
})
export class CharCount {
    user_input: string = '';
    char_number: number = 0;
    is_palindromo: string = '';

    charCounter() {
        this.char_number = this.user_input.length;

        const clean_input = this.user_input.toLowerCase().replace(/\s+/g, ''); //expressão regular para remover espaços em branco
        const inverse_input = clean_input.split('').reverse().join(''); 

        this.is_palindromo = clean_input === inverse_input
        ? 'É um palíndromo!'
        : 'Não é um palíndromo';
    }
}