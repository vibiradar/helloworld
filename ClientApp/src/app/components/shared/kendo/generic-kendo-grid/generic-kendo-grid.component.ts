import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-kendo-grid',
  templateUrl: './generic-kendo-grid.component.html',
  styleUrls: ['./generic-kendo-grid.component.css']
})
export class GenericKendoGridComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
