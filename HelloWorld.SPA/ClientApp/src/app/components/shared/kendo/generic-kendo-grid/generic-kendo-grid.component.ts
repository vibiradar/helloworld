import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudOperationEnum } from '../../models/enums/crud-operation.enum';

@Component({
  selector: 'app-generic-kendo-grid',
  templateUrl: './generic-kendo-grid.component.html',
  styleUrls: ['./generic-kendo-grid.component.css']
})
export class GenericKendoGridComponent implements OnInit {
  @Input() dataItem: any[] = [];
  @Input() columns: any[] = [];

  @Output() public createUpdateDeleteForecast = new EventEmitter<{ data: any, type: string }>();

  public formGroup: FormGroup;
  public editedRowIndex: number;

  constructor() { }

  ngOnInit() {
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);
    let group: any = {};
    this.columns.forEach((col) => {
      group[col.field] = new FormControl(col.value, Validators.compose(col.validation))
    });
    this.formGroup = new FormGroup(group)
    //this.formGroup = new FormGroup({
    //  formControls: formControls

    //  //'date': new FormControl(new Date(2000, 10, 10)),
    //  //'summary': new FormControl('', Validators.required),
    //  //'temperatureC': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    //  //'temperatureF': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    //});

    sender.addRow(this.formGroup);
  }

  public closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);
    let keys = Object.keys(dataItem);
    let group: any = {};

    keys.forEach((key: string) => {
      group[key] = new FormControl(dataItem[key], Validators.compose(this.columns.filter(a => a.field == key)[0].validation));
    })
    this.formGroup = new FormGroup(group);
    //this.formGroup = new FormGroup({
    //  'date': new FormControl(new Date(dataItem.date), Validators.required),
    //  'summary': new FormControl(dataItem.summary, Validators.required),
    //  'temperatureC': new FormControl(dataItem.temperatureC, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    //  'temperatureF': new FormControl(
    //    dataItem.temperatureF,
    //    Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
    //});

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  getMessage(message) {
    return this.columns.filter(a => a.field == message)[0].message;
  }
  public checkcondition(column) {
    return true
  }

  getDdlList(data) {
    return data.countryList[0];
  }
  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const value = formGroup.value;
    console.log(this.dataItem);
    //code to save forecast data to database
    //this.editService.save(product, isNew);
    this.createUpdateDeleteForecast.emit({ data: value, type: isNew ? CrudOperationEnum.SAVE : CrudOperationEnum.UPDATE });
    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    //code to remove forecast data to database
    this.createUpdateDeleteForecast.emit({ data: dataItem, type: CrudOperationEnum.DELETE });
    //this.editService.save(product, isNew);  }
  }
}
import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[popupAnchor]',
  exportAs: 'popupAnchor'
})
export class PopupAnchorDirective {
  constructor(public element: ElementRef) { }
}
