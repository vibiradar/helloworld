import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { FormControlName } from "@angular/forms";

@Component({
  selector: 'kendo-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']

})
export class TextBoxComponent implements OnInit  {
  
  @Input() formControlName: FormControlName;
  constructor() {

  }
  ngOnInit() {

  }
}
