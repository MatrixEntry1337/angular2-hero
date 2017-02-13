import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.findTop(heroes));
  }
  
  // find the top heroes
  findTop(allHeroes: Hero[]): void{
    // sort heroes
    allHeroes.sort((n1, n2) => {
      if (n1.powerLevel > n2.powerLevel) {
        return -1;
      }

      if (n1.powerLevel < n2.powerLevel) {
          return 1;
      }
  
      return 0;
    });
    this.heroes = allHeroes.slice(1, 5);
  }
}
