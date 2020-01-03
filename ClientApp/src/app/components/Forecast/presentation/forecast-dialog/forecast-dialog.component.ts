import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IForecast } from '../../../shared/models/IForcast';

@Component({
  templateUrl: './forecast-dialog.component.html',
  styleUrls: ['./forecast-dialog.component.css']
})
export class ForecastDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ForecastDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IForecast) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
