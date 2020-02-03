import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IForecast } from "../../components/shared/models/IForcast";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FetchService {

  readonly getForcastDataurl = 'api/weatherforecast';
  readonly createForcastDataurl = 'api/weatherforecast/Create';
  readonly updateForcastDataurl = 'api/weatherforecast/Update';
  readonly deleteForcastDataurl = 'api/weatherforecast';


  constructor(private http: HttpClient) {

  }

  //get all forecast
  public getForcastAll(): Observable<IForecast[]> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get<IForecast[]>(this.getForcastDataurl, { headers: headers, observe: "response" }).pipe(
      map(this.extractData2),
      tap(data => console.log('Get doctor appointments: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }


  
  //get forecast by Id
  public getForecastById(id: number): Observable<IForecast> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });

    const url = `${this.getForcastDataurl}/${id}`;
    return this.http.get(url, { headers: headers, observe: "response" }).pipe(
      map(this.extractData2),
      tap(data => console.log('GetDescription By Id: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  //add new forecast entry
  public addForecast(forecast: IForecast): Observable<IForecast> {
    let asd = <IForecast>{};
    Object.assign(asd, forecast);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    const url = `${this.createForcastDataurl}`;
    return this.http.post(url, JSON.parse(JSON.stringify(forecast)), { headers: headers, observe: "response" }).pipe(
      map(this.extractData2),
      tap(data => console.log('Create Forecast: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  //delete forecast by Id
  public deleteForecastById(id: number): Observable<IForecast> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });

    const url = `${this.deleteForcastDataurl}/${id}`;
    return this.http.delete(url, { headers: headers, observe: "response" }).pipe(
      map((p) => this.extractData2(p)),
      catchError(this.handleError));
  }

  //Update the forecast
  public UpdateForecast(forecast: IForecast): Observable<IForecast> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    const url = `${this.updateForcastDataurl}`;
    return this.http.post(url, forecast, { headers: headers, observe: "response" }).pipe(
      map(this.extractData2),
      tap(data => console.log('Updated Forecast: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  //extract data from hhtp response
  private extractData2(response: HttpResponse<any>) {
    let body = response.body;
    return body || {};
  }

  //handle error response from http
  private handleError(error: HttpErrorResponse, self: any): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error.message);

    return throwError(error.message || 'Server error');
  }
}
