import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: false,
})
export class NavbarComponent {
    @Input() gender!: string
    @Output() selectGender = new EventEmitter()

    genderSelection() {
        localStorage.setItem("gender", this.gender)
        this.selectGender.emit(this.gender)
    }
}
