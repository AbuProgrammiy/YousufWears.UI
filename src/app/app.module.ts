import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GenderSelectionComponent } from './components/secondary/gender-selection/gender-selection.component';
import { HomeComponent } from './components/primary/home/home.component';
import { NavbarComponent } from './components/primary/navbar/navbar.component';

// PrimeNG providers
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { Dock } from 'primeng/dock';


// PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';

import { RadioButton } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GenderSelectionComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DockModule,
    RadioButton,
    CommonModule,
    FormsModule,
    TooltipModule,
    Dock
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
