import { Component, EventEmitter, OnDestroy, OnInit, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'student-details-dialog',
  templateUrl: './student-details-dialog.component.html',
  styleUrls: ['./student-details-dialog.component.scss']
})
export class StudentDetailsDialogComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  UserData: any;
  constructor(
    private dialogRef: MatDialogRef<StudentDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, 
    private elementRef: ElementRef, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}
  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.initAssign();
  }

  ngOnDestroy() {
    
  }

  clickOk(): void {
    this.dialogRef.close();
  }

  initAssign(): void{
    if(Object.keys(this.data.data).length > 0) {
      this.UserData = this.data.data;
    } else {
      this.UserData = {};
    }
    this.registerForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      govtIDtype: ['', Validators.required],
      govtID: ['', Validators.required],
      flat_house_landmark: ['', Validators.required],
      pincode: ['', Validators.required],
      city_state: ['', Validators.required],
      profilePhoto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.pattern('[6-9]\\d{9}')]],
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'email':
        return this.registerForm.controls[field].hasError('email') ? 'Not a valid email' : '';
      case 'name':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a name' : '';
      case 'govtIDtype':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a Govt. ID type' : '';
      case 'govtID':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a Govt. ID' : '';
      case 'flat_house_landmark':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a Flat, House, Landmark' : '';
      case 'city_state':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter city, state' : '';
      case 'pincode':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a Pincode' : this.registerForm.controls[field].hasError('minlength') ? 'Not a valid pincode' : '';
      case 'profilePhoto':
        return this.registerForm.controls[field].hasError('required') ? 'You must Add the document' : '';
      case 'phone':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a mobile number' : this.registerForm.controls[field].hasError('pattern') ? 'Mobile number is invalid' : this.registerForm.controls[field].hasError('minlength') ? 'Mobile number is invalid' : '';
      default:
        break;
    }
  }

}
