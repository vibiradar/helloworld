import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: 'drop-down-control',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() formControlName: string = '';
  @Input() data;
  @Input() defaultvalue;
  constructor() {

  }
  ngOnInit() {

  }
}
