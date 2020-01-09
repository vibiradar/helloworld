import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IForecast } from "../../components/shared/models/IForcast";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class FetchService {

  readonly getForcastDataurl = 'api/weatherforecast';

  constructor(private http: HttpClient) {

  }

  public getForcastData(): Observable<IForecast[]> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get<IForecast[]>(this.getForcastDataurl, { headers: headers, observe: "response" }).pipe(
      map(this.extractData2),
      tap(data => console.log('Get doctor appointments: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  private extractData2(response: HttpResponse<any>) {
    let body = response.body;
    return body || {};
  }
  private handleError(error: HttpResponse<any>, self: any): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);

    return Observable.throw(error || 'Server error');
  }
}
