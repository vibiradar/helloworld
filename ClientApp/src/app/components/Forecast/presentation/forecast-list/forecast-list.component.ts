import { OnInit, Component, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { IForecast } from "../../../shared/models/IForcast";


@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-list.component.html',
})
export class ForecastDetailComponent implements OnInit, OnDestroy {
  @Input() forecasts: IForecast[];
  @Output() forecastEmit = new EventEmitter();
  constructor() {

  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
  openDialog(forecast: IForecast) {
    this.forecastEmit.emit(forecast);
  }
}
