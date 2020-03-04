import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'driver-details-dialog',
  templateUrl: './driver-details-dialog.component.html',
  styleUrls: ['./driver-details-dialog.component.scss']
})
export class DriverDetailsDialogComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  UserData: any;
  mode: string;
  title = "create new driver";
  options: string[] = ['Driver - 001', 'Driver - 002', 'Driver - 003'];
  constructor(
    private dialogRef: MatDialogRef<DriverDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, 
    public snackBar: MatSnackBar
  ) {}
  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.initAssign();
  }

  ngOnDestroy() {
    
  }

  clickOk(): void {
    if(!this.registerForm.valid) {
      return;
    }
    const msg = this.mode === 'add' ? 'Driver creader sucessfully': 'Driver edited sucessfully';
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['green-snackbar'],
    });

    this.dialogRef.close();
  }

  initAssign(): void{
    if(Object.keys(this.data.data).length > 0) {
      this.UserData = this.data.data;
      this.mode = 'edit';
      this.title = 'Edit driver ' + this.UserData.name;
    } else {
      this.mode = 'add';
      this.UserData = {};
    }
    this.registerForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      age: ['', Validators.required],
      mobile: ['', Validators.required],
      licence: ['', Validators.required]
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'name':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a driver name' : '';
      case 'number':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a driver number' : '';
      case 'age':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a age' : '';
      case 'mobile':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a mobile number' : '';
      case 'licence':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a licence number' : '';
      default:
        break;
    }
  }
}
