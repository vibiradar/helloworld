import { Action } from "@ngrx/store";
import { ShowLoader, HideLoader } from "../../components/shared/actionDecorators/action-decorators";


export const Forecast_Data_GET_ALL = '[Forecast Data Component] Get Forecast Data List';
export const Forecast_Data_GET_ALL_SUCCEEDED = '[Forecast Data Component] Get Forecast Data List  Succeeded';
export const Forecast_Data_GET_ALL_FAILED = '[Forecast Data Component] Get Forecast Data List Failed';
export const Forecast_Data_GET_ALL_STARTED = '[Forecast Data Component] Get Forecast Data List Started';

export const Forecast_Data_GET_BY_ID = '[Forecast Data Component] Get Forecast Data By ID';
export const Forecast_Data_GET_BY_ID_SUCCEEDED = '[Forecast Data Component] Get Forecast Data By ID Succeeded';
export const Forecast_Data_GET_BY_ID_FAILED = '[Forecast Data Component] Get Forecast Data By ID Failed';
export const Forecast_Data_GET_BY_ID_STARTED = '[Forecast Data Component] Get Forecast Data By ID Started';

export const Forecast_Data_ADD = '[Forecast Data Component] Add Forecast Data';
export const Forecast_Data_ADD_SUCCEEDED = '[Forecast Data Component]Add Forecast Data Succeeded';
export const Forecast_Data_ADD_FAILED = '[Forecast Data Component] Add Forecast Data Failed';
export const Forecast_Data_ADD_STARTED = '[Forecast Data Component] Add Forecast Data Started';

export const Forecast_Data_UPDATE = '[Forecast Data Component] Update Forecast Data';
export const Forecast_Data_UPDATE_SUCCEEDED = '[Forecast Data Component] Update Forecast Data Succeeded';
export const Forecast_Data_UPDATE_FAILED = '[Forecast Data Component] Update Forecast Data Failed';
export const Forecast_Data_UPDATE_STARTED = '[Forecast Data Component] Update Forecast Data Started';

export const Forecast_Data_DELETE = '[Forecast Data Component] Delete Forecast Data By ID';
export const Forecast_Data_DELETE_SUCCEEDED = '[Forecast Data Component] Delete Forecast Data By ID Succeeded';
export const Forecast_Data_DELETE_FAILED = '[Forecast Data Component] Delete Forecast Data By ID Failed';
export const Forecast_Data_DELETE_STARTED = '[Forecast Data Component] Delete Forecast Data By ID Started';

//#startregion Get ALL Forecast
@ShowLoader()
export class GetForecastAll implements Action {
  readonly type: string = Forecast_Data_GET_ALL;
}

export class GetForecastAll_Started implements Action {

  readonly type: string = Forecast_Data_GET_ALL_STARTED;
}

@HideLoader(Forecast_Data_GET_ALL)
export class GetForecastAll_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_GET_ALL_SUCCEEDED);
  }
  readonly type: string = Forecast_Data_GET_ALL_SUCCEEDED;
}

@HideLoader(Forecast_Data_GET_ALL)
export class GetForecastAll_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Forecast_Data_GET_ALL_FAILED;
}

@ShowLoader()
export class AddForecastData implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_ADD);
  }
  readonly type: string = Forecast_Data_ADD;
}
//#endregion Get ALL Forecast

//#startregion Add Forecast data
export class AddForecastData_Started implements Action {

  readonly type: string = Forecast_Data_ADD_STARTED;
}

@HideLoader(Forecast_Data_ADD)
export class AddForecastData_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_ADD_SUCCEEDED);
  }
  readonly type: string = Forecast_Data_ADD_SUCCEEDED;
}

@HideLoader(Forecast_Data_ADD)
export class AddForecastData_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Forecast_Data_ADD_FAILED;
}
//#endregion Add Forecast data

//#startregion Delete Forecast data
@ShowLoader()
export class DeleteForecastData implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_DELETE);
  }
  readonly type: string = Forecast_Data_DELETE;
}

export class DeleteForecastData_Started implements Action {

  readonly type: string = Forecast_Data_DELETE_STARTED;
}

@HideLoader(Forecast_Data_DELETE)
export class DeleteForecastData_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_DELETE_SUCCEEDED);
  }
  readonly type: string = Forecast_Data_DELETE_SUCCEEDED;
}

@HideLoader(Forecast_Data_DELETE)
export class DeleteForecastData_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Forecast_Data_DELETE_FAILED;
}
//#endregion Delete Forecast data


//#startregion Update Forecast data
@ShowLoader()
export class UpdateForecastData implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_UPDATE);
  }
  readonly type: string = Forecast_Data_UPDATE;
}

export class UpdateForecastData_Started implements Action {

  readonly type: string = Forecast_Data_UPDATE_STARTED;
}

@HideLoader(Forecast_Data_UPDATE)
export class UpdateForecastData_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Forecast_Data_UPDATE_SUCCEEDED);
  }
  readonly type: string = Forecast_Data_UPDATE_SUCCEEDED;
}

@HideLoader(Forecast_Data_UPDATE)
export class UpdateForecastData_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Forecast_Data_UPDATE_FAILED;
}
//#endregion Update Forecast data


export type ForecastData_Action = GetForecastAll | GetForecastAll_Failed | GetForecastAll_Succeeded | GetForecastAll_Started |
  AddForecastData | AddForecastData_Started | AddForecastData_Succeeded | AddForecastData_Failed |
  UpdateForecastData | UpdateForecastData_Started | UpdateForecastData_Succeeded | UpdateForecastData_Succeeded;// |
