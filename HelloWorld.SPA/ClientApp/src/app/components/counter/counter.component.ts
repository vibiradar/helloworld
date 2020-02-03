import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { AppState, getCounter } from '../../store/app.state';
import { Increment, Decrement, Reset } from '../../store/counter';
import { HeroService } from '../shared/services/hero.setvice';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy {
    public counter: number = 0;
    private subs = new SubSink();
    constructor(private store: Store<AppState>, private heroService: HeroService) { }
    length: number;
  ngOnInit() {
    this.length = this.heroService.getHeros().length;
        this.subs.sink = this.store.pipe(select(getCounter)).subscribe((res: any) => {
            this.counter = res.counter
        });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    increment() {
        this.store.dispatch(new Increment(1));

    }
    decrement() {
        this.store.dispatch(new Decrement(1));

    }
    reset() {
        this.store.dispatch(new Reset(1));
    }
}
