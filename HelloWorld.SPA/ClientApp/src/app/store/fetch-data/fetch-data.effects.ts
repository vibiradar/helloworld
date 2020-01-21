import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { GetForecastAll_Succeeded, Forecast_Data_GET_ALL, Forecast_Data_GET_BY_ID, Forecast_Data_ADD, Forecast_Data_UPDATE, Forecast_Data_DELETE, AddForecastData_Succeeded, Forecast_Data_UPDATE_SUCCEEDED, UpdateForecastData_Succeeded, DeleteForecastData_Succeeded } from './fetch-data.action';
import { FetchService } from './fetch-data.service';
import { IForecast } from '../../components/shared/models/IForcast';

@Injectable()
export class FetchDataEffects {
  constructor(private actions$: Actions, private fetchService: FetchService) { }
  @Effect()
  public getAllForecast$ = this.actions$.pipe(
    ofType(Forecast_Data_GET_ALL),
    // Switch the context to a different type of observable
    switchMap((action) =>
      this.fetchService.getForcastAll().pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast[]) => new GetForecastAll_Succeeded(data))
      ),
    ),
  );

  @Effect()
  public getForecastByID$ = this.actions$.pipe(
    ofType(Forecast_Data_GET_BY_ID),
    // Switch the context to a different type of observable
    switchMap((action: any) =>
      this.fetchService.getForecastById(action.payload).pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast) => new GetForecastAll_Succeeded(data))
      ),
    ),
  );

  @Effect()
  public addForecast$ = this.actions$.pipe(
    ofType(Forecast_Data_ADD),
    // Switch the context to a different type of observable
    switchMap((action: any) =>
      this.fetchService.addForecast(action.payload).pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast) => new AddForecastData_Succeeded(data))
      ),
    ),
  );

  @Effect()
  public updateForecast$ = this.actions$.pipe(
    ofType(Forecast_Data_UPDATE),
    // Switch the context to a different type of observable
    switchMap((action: any) =>
      this.fetchService.UpdateForecast(action.payload).pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast) => new UpdateForecastData_Succeeded(data))
      ),
    ),
  );
  @Effect()
  public deleteForecastById$ = this.actions$.pipe(
    ofType(Forecast_Data_DELETE),
    // Switch the context to a different type of observable
    switchMap((action: any) =>
      this.fetchService.deleteForecastById(action.payload).pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast) => new DeleteForecastData_Succeeded(data))
      ),
    ),
  );
}
