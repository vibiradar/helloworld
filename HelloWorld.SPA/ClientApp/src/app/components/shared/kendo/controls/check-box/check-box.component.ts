import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: 'check-box-control',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  @Input() formControlname: string = '';
  constructor() {

  }
  ngOnInit() {

  }
}
