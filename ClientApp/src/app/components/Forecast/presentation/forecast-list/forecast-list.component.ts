import { OnInit, Component, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { IForecast } from "../../../shared/models/IForcast";


@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
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
