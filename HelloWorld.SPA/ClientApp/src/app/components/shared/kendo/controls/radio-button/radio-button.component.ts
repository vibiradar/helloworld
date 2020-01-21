import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'kendo-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() radioButtons;
  constructor() {

  }
  ngOnInit() {

  }
}
