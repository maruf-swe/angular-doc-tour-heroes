import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){
    
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
}


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
}


}
