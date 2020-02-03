import { Component } from '@angular/core';
import { Ihero } from '../shared/models/Ihero';
import { HeroService } from '../shared/services/hero.setvice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private heroService: HeroService) {
    this.heros = heroService.getHeros();
  }
  heros: Ihero[];
  addHero() {
    this.heroService.addHero();
  }

  getheros() {
    this.heros = this.heroService.getHeros();
  }

  deleteHero() {
    this.heroService.removeHero();

    this.getheros();
  }
}

