import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast } from '../../shared/models/IForcast';
import { Store, select } from '@ngrx/store';
import { GetData, AddForecastData, DeleteForecastData } from '../../../store/fetch-data/fetch-data.action'
import { AppState, getForecast } from '../../../store/app.state';
import { SubSink } from 'subsink';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ForecastDialogComponent } from '../presentation/forecast-dialog/forecast-dialog.component';
import { updateObjectInArray } from '../../shared/utility/utility.service';

@Component({
  selector: 'app-forecast.container',
  templateUrl: './forecast.container.component.html'
})
export class ForecastContainerComponent implements OnInit, OnDestroy {
  public forecasts: IForecast[] = [];
  private subs = new SubSink();
  selectedIndex: number = 1;
  constructor(private store: Store<AppState>, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(getForecast)).subscribe((forecasts: IForecast[]) => {
      if (forecasts && forecasts.length > 0) {
        const forecast = forecasts[0];
        forecast.summary = "Hello";
        this.forecasts = [];
        this.forecasts = updateObjectInArray(forecasts, forecast, 0);
        //this.forecasts[0] = forecast;
      }
      this.selectedIndex = 0;
    });

    if (this.forecasts.length == 0) {
      this.store.dispatch(new GetData());
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  openDialog(data: IForecast): void {
    const dialogRef = this.dialog.open(ForecastDialogComponent, {
      data: data,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(forecastvalue => {
      if (forecastvalue) {
        this.store.dispatch(new DeleteForecastData(forecastvalue));
        console.log('The dialog was closed and deleted the record');

      }
    });
  }
  addForecast(forecastvalue: IForecast) {
    this.store.dispatch(new AddForecastData(forecastvalue));
  }


}

