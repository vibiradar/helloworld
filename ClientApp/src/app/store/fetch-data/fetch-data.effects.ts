import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { GetData_Succeeded, Forecast_Data_GET } from './fetch-data.action';
import { FetchService } from './fetch-data.service';
import { IForecast } from '../../components/shared/models/IForcast';

@Injectable()
export class FetchDataEffects {
  constructor(private actions$: Actions, private fetchService: FetchService) { }
  @Effect()
  public initiateTimeHop$ = this.actions$.pipe(
    ofType(Forecast_Data_GET),
    // Switch the context to a different type of observable
    switchMap((action) =>
      this.fetchService.getForcastData().pipe(
        // Create the completion action, and pass in the data  
        // returned from the service as the payload
        map((data: IForecast[]) => new GetData_Succeeded(data))
      ),
    ),
  );
}
