import { Component } from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    standalone: false
})
export class MainPageComponent {
  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.gender = localStorage.getItem("gender") as string
    }
  }

  gender!: string

  selectGender(gender:string){
    this.gender=gender
  }
}
