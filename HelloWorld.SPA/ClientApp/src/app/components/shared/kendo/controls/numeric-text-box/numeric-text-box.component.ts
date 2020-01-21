import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'kendo-numeric-text-box',
  templateUrl: './numeric-text-box.component.html',
  styleUrls: ['./numeric-text-box.component.css']
})
export class NumericTextBoxComponent implements OnInit {
  //@Input() value;
  @Input() formControlName;
  constructor() {

  }
  ngOnInit() {

  }
}
