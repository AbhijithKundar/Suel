import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'bus-details-dialog',
  templateUrl: './bus-details-dialog.component.html',
  styleUrls: ['./bus-details-dialog.component.scss']
})
export class BusDetailsDialogComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  UserData: any;
  mode: string;
  title = "create new vehicle";
  options: string[] = ['Driver - 001', 'Driver - 002', 'Driver - 003'];
  constructor(
    private dialogRef: MatDialogRef<BusDetailsDialogComponent>,
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
    const msg = this.mode === 'add' ? 'Vehcile creader sucessfully': 'Vehcile edited sucessfully';
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
      this.title = 'Edit vehicle ' + this.UserData.name;
    } else {
      this.mode = 'add';
      this.UserData = {};
    }
    this.registerForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      driver: ['', Validators.required],
      internal: ['', Validators.required],
      external: ['', Validators.required]
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'name':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a vehicle name' : '';
      case 'type':
        return this.registerForm.controls[field].hasError('required') ? 'You must select a vehcile type' : '';
      case 'driver':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a driver' : '';
      case 'internal':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a internal expectation' : '';
      case 'external':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a external expectaion' : '';
      default:
        break;
    }
  }
}
