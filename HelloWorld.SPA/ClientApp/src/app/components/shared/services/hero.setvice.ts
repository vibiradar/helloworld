import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Ihero } from '../models/Ihero';

@Injectable({ providedIn: 'root' })
export class HeroService {
    constructor() {

    }
    heros: Ihero[] = [{category:'Category 1',name:'Hero 1',id:1}];
    getHeros() {
        return this.heros;
    }
    addHero() {
        let length = this.getHeros().length;
        let hero = <Ihero>{};
        hero.name = "Hero " + (length +1);
        hero.category = "Category " +(length +1);
        hero.id = (length +1);
        this.heros.push(hero);
    }
    removeHero() {
        this.heros.splice((this.heros.length-1), 1);
    }
}