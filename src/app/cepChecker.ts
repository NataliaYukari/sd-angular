import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'cep-checker',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    template: `
        <div class= "cep-form">
            <h2>Consulte um CEP:</h2>
            <input [(ngModel)]="cep" placeholder="Digite o CEP" maxlength="8"/>
            <button (click)="searchCEP()">Buscar</button>

            <div *ngIf="endereco">
                <h3>Endereço:</h3>
                <p>Rua: {{endereco.logradouro}}</p>
                <p>Bairro: {{endereco.bairro}}</p>
                <p>Cidade: {{endereco.localidade}}</p>
                <p>Estado: {{endereco.uf}}</p>
            </div>
        </div>
    `,
    styles: [`
        .cep-form {
            max-width: 400px;
            text-align: center;
        }

        input {
            padding: 5px;
            margin-bottom: 10px;
            width: 80%
        }

        button {
            padding: 5px;
            margin-bottom: 10px;
        }
        `]
})

export class CepCheckerComponent {
    cep: string = '';
    endereco: any = null;

    constructor(private http: HttpClient) {}

    searchCEP() {
        const cleanCEP = this.cep.replace(/\D/g, '');
        if (cleanCEP.length !== 8) {
            alert('CEP inválido. Digite 8 números');
            return;
        }
    

        this.http.get(`https://viacep.com.br/ws/${cleanCEP}/json/`)
        .subscribe((dados) => {
            if ('erro' in dados) {
                alert('CEP não encontrado');
                this.endereco = null;
            } else {
                this.endereco = dados;
            }
        });
    }
}