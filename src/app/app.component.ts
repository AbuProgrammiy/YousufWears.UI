import { Component } from '@angular/core';
import * as AOS from 'aos'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent {
  title = 'template';

  ngOnInit(): void {
    AOS.init()
  }
}
