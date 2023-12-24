import { Component } from '@angular/core';
import { Hero } from '../hero';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [BrowserModule, FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes = HEROES;

}
