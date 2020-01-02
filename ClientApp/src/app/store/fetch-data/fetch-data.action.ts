import { Action } from "@ngrx/store";
import { IForecast } from "../../components/shared/models/IForcast";

export const Fetch_Data_GET = '[Fetch Data Component] Get Data List';
export const Fetch_Data_SUCCEEDED = '[Fetch Data Component] Get Data  Succeeded';
export const Fetch_Data_FAILED = '[Fetch Data Component] Get Data Failed';
export const Fetch_Data_STARTED = '[Fetch Data Component] Get Data Started';

export class GetData implements Action {
  readonly type: string = Fetch_Data_GET;
}

export class GetData_Started implements Action {

  readonly type: string = Fetch_Data_STARTED;
}
export class GetData_Succeeded implements Action {
  constructor(public payload: any) {
    // Log message is here just so we can see when our actions
    // get dispatched in the console.
    console.log('ACTION ' + Fetch_Data_SUCCEEDED);
  }
  readonly type: string = Fetch_Data_SUCCEEDED;
}

export class GetData_Failed implements Action {
  constructor(public payload: string) {
    console.log(payload);
  }
  readonly type: string = Fetch_Data_FAILED;
}

export type FetchData_Action = GetData_Failed | GetData_Succeeded | GetData;
