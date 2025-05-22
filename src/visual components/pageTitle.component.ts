import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-page-title',
    standalone: true,
    imports: [CommonModule],
    template: `<h1 class='page-title'>{{ title }}</h1>`,
    styles: [`
        .page-title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 10px;
            font-weight: bold;
        }
    `]
})

export class PageTitleComponent {
    @Input() title: string = 'Title';
}