import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit {
 
hero: Hero | undefined;

constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
){}

ngOnInit(): void {
  this.getHero();
}

getHero():void{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
}

goBack():void{
  this.location.back();
}

}
