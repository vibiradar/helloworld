import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IForecast } from '../../../shared/models/IForcast';

@Component({
  selector: 'app-forecast-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formGroup: FormGroup;
  forecastForm: FormGroup;
  @Output() addForecast = new EventEmitter();
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.forecastForm = this.formBuilder.group({
      'summary': [null, Validators.required],
      'date': [null, Validators.required],
      'temperatureF': [null, Validators.required],
      'temperatureC': [null, Validators.required],
    });
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //this.formGroup = this.formBuilder.group({
    //  'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
    //  'name': [null, Validators.required],
    //  'password': [null, [Validators.required, this.checkPassword]],
    //  'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    //  'validate': ''
    //});
  }
  onSubmit(forecastValue: IForecast) {
    console.log(forecastValue);
    this.addForecast.emit(forecastValue);
    this.forecastForm.reset();

  }

  //get name() {
  //  return this.formGroup.get('name') as FormControl
  //}
  //getErrorEmail() {
  //  return this.formGroup.get('email').hasError('required') ? 'Field is required' :
  //    this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
  //      this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  //}
  //getErrorPassword() {
  //  return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
  //    this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  //}
  //checkPassword(control) {
  //  let enteredPassword = control.value
  //  let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //  return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  //}

  //checkInUseEmail(control) {
  //  // mimic http database access
  //  let db = ['tony@gmail.com'];
  //  return new Observable(observer => {
  //    setTimeout(() => {
  //      let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //      observer.next(result);
  //      observer.complete();
  //    }, 4000)
  //  })
  //}
}
