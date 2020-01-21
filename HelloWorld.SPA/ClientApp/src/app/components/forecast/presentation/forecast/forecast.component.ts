import { Component, OnInit, Input } from '@angular/core';
import { IForecast } from '../../../shared/models/IForcast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecasts: IForecast[];
  constructor() { }

  ngOnInit() {
  }

}
