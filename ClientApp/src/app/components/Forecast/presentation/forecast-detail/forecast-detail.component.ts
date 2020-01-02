import { OnInit, Component, OnDestroy, Input } from "@angular/core";
import { IForecast } from "../../../shared/models/IForcast";


@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
})
export class ForecastDetailComponent implements OnInit, OnDestroy {
  @Input() forecasts: IForecast[];
  constructor() {

  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
