import { Component, OnInit } from "@angular/core";
import { AppState, getLoading, getLoadingSpinnerActive } from "../../store/app.state";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
})
export class ProgressSpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isLoading: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {

    this.store.pipe(
      select(getLoadingSpinnerActive)
    ).subscribe((result: number) => {
      this.isLoading = result ? result : 0;
    });

  }

}
