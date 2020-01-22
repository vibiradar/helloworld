import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Validators, FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  templateUrl: './kendo-generic-form-array.component.html'

})
export class KendoGenericFormArrayComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {

  }
  public formGroup: FormGroup;

  @Input() columns: any[] = [];

  ngOnInit() {
    this.columns = [
      {
        field: "temperatureF", title: "Temp. (F)", editor: "numeric", format: "", editable: false, value: '',
        selectedValue: '',
        validation: [Validators.required, Validators.pattern('^[0-9]{1,3}')],
        message: "Temperature in F required",
      },
      {
        field: "summary", title: "Summary", editor: "text", format: "", editable: true, value: '',
        selectedValue: '',
        message: "Summary is required",
        validation: [Validators.required],
      },
      {
        field: "summary1", title: "Summary 1", editor: "text", format: "", editable: true, value: '',
        selectedValue: '',
        message: "Summary is required",
        validation: [Validators.required],
      },
      {
        field: "sport", title: "Favorite sport", editor: "ddl", format: '', editable: true,
        value: [
          { text: "Male", value: 1 },
          { text: "Female", value: 2 },
          { text: "Other", value: 3 }
        ],
        selectedValue: [{ text: "Male", value: 1 },
        ],
        validation: [Validators.required],
        message: "Select any one country",
      },
      {
        field: "sport1", title: "Favorite sport", editor: "multiselect", format: '', editable: true,
        value: [
          { text: "Male", value: 1 },
          { text: "Female", value: 2 },
          { text: "Other", value: 3 }
        ],
        selectedValue: [{ text: "Male", value: 1 },
        ],
        validation: [Validators.required],
        message: "Select any one country",
      }
    ];

    let group: any = {};
    this.columns.forEach((col) => {
      group[col.field] = new FormControl(col.selectedValue, Validators.compose(col.validation))
    });

    this.formGroup = this.fb.group({
      formArray: this.fb.array([])
    })

    var control = <FormArray>this.formGroup.controls.formArray;

    this.columns.forEach((col) => {
      control.push(group)
    });


    this.formGroup = new FormGroup(group);
  }

  ngOnDestroy() {

  }


}
