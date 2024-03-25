import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BandComponent } from './components/band/band.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BandComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
