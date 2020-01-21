import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast } from '../../shared/models/IForcast';
import { Store, select } from '@ngrx/store';
import { GetForecastAll, AddForecastData, DeleteForecastData, UpdateForecastData } from '../../../store/fetch-data/fetch-data.action'
import { AppState, getForecast } from '../../../store/app.state';
import { SubSink } from 'subsink';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ForecastDialogComponent } from '../presentation/forecast-dialog/forecast-dialog.component';
import { updateObjectInArray } from '../../shared/utility/utility.service';
import { CrudOperationEnum } from '../../shared/models/enums/crud-operation.enum';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forecast.container',
  templateUrl: './forecast.container.component.html'
})
export class ForecastContainerComponent implements OnInit, OnDestroy {
  public forecasts: IForecast[] = [];

  public columns: any[] = [
    {
      field: "date", title: "Date", editor: "date", format: "dd/MM/yyyy h:mm a", editable: true, value: new Date(2000, 10, 10),
      validation: [Validators.required],
      message: "date is required"
    },
    {
      field: "temperatureC", title: "Temp. (C)", editor: "numeric", format: "", editable: true, value: '',
      validation: [Validators.required, Validators.pattern('^[0-9]{1,3}')],
      message: "Temperature in C required"
    },
    {
      field: "temperatureF", title: "Temp. (F)", editor: "numeric", format: "", editable: false, value: '',
      validation: [Validators.required, Validators.pattern('^[0-9]{1,3}')],
      message: "Temperature in F required",
    },
    {
      field: "summary", title: "Summary", editor: "text", format: "", editable: true, value: '',
      message: "Summary is required",
      validation: [Validators.required],
    },
    {
      field: "id", title: "Id", editor: "text", format: "", editable: true, value: '',
      removeColumn: true,
      message: "Id is not required",
    },
    {
      field: "countryList", title: "Country", editor: "ddl", format: '', editable: true, value: '',
      validation: [Validators.required],
      message: "Select any one country",
    }
  ];

  selectedIndex: number = 1;

  private subs = new SubSink();

  constructor(private store: Store<AppState>, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.subs.sink = this.store.pipe(select(getForecast)).subscribe((forecasts: IForecast[]) => {
      if (forecasts && forecasts.length > 0) {
        //const forecast = forecasts[0];
        //forecast.summary = "Hello";
        //this.forecasts = [];
        // to update  data
        //this.forecasts = updateObjectInArray(forecasts, forecast, 0);
        forecasts.forEach((d) => {
          d.date = new Date(d.date);
        });
        this.forecasts = forecasts;
      }
      this.selectedIndex = 0;
    });

    if (this.forecasts.length == 0) {
      this.store.dispatch(new GetForecastAll());
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
        this.store.dispatch(new DeleteForecastData(forecastvalue.id));
        console.log('The dialog was closed and deleted the record');

      }
    });
  }

  //add new forcast data
  addForecast(forecastvalue: IForecast) {
    this.store.dispatch(new AddForecastData(forecastvalue));
  }

  //update forecast data
  //updateForecast(forecast: IForecast) {
  //  this.store.dispatch(new UpdateForecastData(forecast));
  //}

  //delete forecast data by id
  deleteForecast(forecastId: number) {
    this.store.dispatch(new DeleteForecastData(forecastId));
  }

  //add or update or delete forecast data
  createUpdateDeleteForecast(event) {
    console.log(event);

    switch (event.type) {
      case CrudOperationEnum.SAVE:
        this.store.dispatch(new AddForecastData(event.data));
        break;
      case CrudOperationEnum.UPDATE:
        this.store.dispatch(new UpdateForecastData(event.data));
        break;
      case CrudOperationEnum.DELETE:
        this.store.dispatch(new DeleteForecastData(event.data.id));
        break;
    }
  }

}

