import { OnInit, OnDestroy, Component, Input, Output, EventEmitter } from "@angular/core";
import { IForecast } from "../../../shared/models/IForcast";


@Component({
  selector: 'app-forecast-detail-view',
  templateUrl: './forecast-detail-view.component.html'
})
export class ForecastDetailViewComponent implements OnInit, OnDestroy {
  @Input() forecast: IForecast;
  @Output() forecastEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

  openDialog(forecast: IForecast): void {
    this.forecastEvent.emit(forecast)
  }

}
