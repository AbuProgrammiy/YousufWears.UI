import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'gender-selection',
    templateUrl: './gender-selection.component.html',
    styleUrl: './gender-selection.component.scss',
    standalone: false
})
export class GenderSelectionComponent {
  @Output() selectGender = new EventEmitter()

  genderSelection(gender: string) {
    localStorage.setItem("gender", gender)
    this.selectGender.emit(gender)
  }
}
