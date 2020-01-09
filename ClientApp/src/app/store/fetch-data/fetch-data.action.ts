import { Action } from "@ngrx/store";
import { ShowLoader, HideLoader } from "../../components/shared/actionDecorators/action-decorators";


export const Forecast_Data_GET = '[Forecast Data Component] Get Data List';
export const Forecast_Data_SUCCEEDED = '[Forecast Data Component] Get Data  Succeeded';
export const Forecast_Data_FAILED = '[Forecast Data Component] Get Data Failed';
export const Forecast_Data_STARTED = '[Forecast Data Component] Get Data Started';
export const Forecast_Data_ADD = '[Forecast Data Component] Add Forecast Data';
export const Forecast_Data_DELETE = '[Forecast Data Component] Delete Forecast Data';

@ShowLoader()
export class GetData implements Action {
  readonly type: string = Forecast_Data_GET;
}

export class GetData_Started implements Action {

  readonly type: string = Forecast_Data_STARTED;
}

@HideLoader(Forecast_Data_GET)
export class GetData_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_SUCCEEDED);
  }
  readonly type: string = Forecast_Data_SUCCEEDED;
}

export class AddForecastData implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_ADD);
  }
  readonly type: string = Forecast_Data_ADD;
}

export class DeleteForecastData implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_DELETE);
  }
  readonly type: string = Forecast_Data_DELETE;
}

@HideLoader(Forecast_Data_GET)
export class GetData_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Forecast_Data_FAILED;
}

export type ForecastData_Action = GetData_Failed | GetData_Succeeded | GetData;
