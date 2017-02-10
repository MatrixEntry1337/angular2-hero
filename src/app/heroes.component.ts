import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  // factory design pattern - supply an instance of the HeroService
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  
  // get heroes
  getHeroes(): void {
    // equiv - this.heroService.getHeroes().then(function(heroes){this.heroes = heroes})
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  // navigates to detail
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  // on selection of hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  // add a hero
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  
  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}