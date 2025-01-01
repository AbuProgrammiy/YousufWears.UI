import { Component, Input } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
    @Input() gender !: string
}
