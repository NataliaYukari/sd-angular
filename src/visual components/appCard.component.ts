import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
    template: `
        <mat-card class="app-card">
            <mat-card-title>{{title}}</mat-card-title>
            <mat-card-content>
                <p>{{text}}</p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-raised-button [routerLink]="route" color="primary">Acesse aqui</button>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        .app-card {
            margin: 10px;
            width: 300px;
        }
    `]
})

export class AppCardComponent {
    @Input() title!: string;
    @Input() text!: string;
    @Input() route!: string;
}
