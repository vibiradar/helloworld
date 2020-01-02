import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast } from '../../shared/models/IForcast';
import { Store, select } from '@ngrx/store';
import { GetData } from '../../../store/fetch-data/fetch-data.action'
import { AppState, getForecast } from '../../../store/app.state';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-forecast.container',
  templateUrl: './forecast.container.component.html'
})
export class ForecastContainerComponent implements OnInit, OnDestroy {
  public forecasts: IForecast[];
  private subs = new SubSink();
  constructor(private store: Store<AppState>) {
   
  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(getForecast)).subscribe((forecasts: IForecast[]) => {
      this.forecasts = forecasts
    });

    if (this.forecasts.length == 0) {
      this.store.dispatch(new GetData());
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  
}

