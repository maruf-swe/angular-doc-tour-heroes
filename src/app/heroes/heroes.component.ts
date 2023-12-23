import { Component } from '@angular/core';
import { Hero } from '../hero';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  hero: Hero = {
    id: 1,
    name: 'Maruf'
  }

}
