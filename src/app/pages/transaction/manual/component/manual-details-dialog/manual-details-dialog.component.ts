import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'manual-details-dialog',
  templateUrl: './manual-details-dialog.component.html',
  styleUrls: ['./manual-details-dialog.component.scss']
})
export class ManualDetailsDialogComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  UserData: any;
  mode: string;
  title = "New manual entry";
  vehicle_no: string[] = ['vehicle - 001', 'vehicle - 002', 'vehicle - 003'];
  driver_no: string[] = ['Driver - 001', 'Driver - 002', 'Driver - 003'];
  constructor(
    private dialogRef: MatDialogRef<ManualDetailsDialogComponent>,
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
    const msg = this.mode === 'add' ? 'Manual entry added sucessfully': 'Manual entry edited sucessfully';
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
      vehicle: ['', Validators.required],
      driver: ['', Validators.required],
      litre: ['', Validators.required],
      type: ['', Validators.required],
      time: ['', Validators.required]
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'vehicle':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a vehicle number' : '';
      case 'driver':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a driver number' : '';
      case 'type':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a vehicle type' : '';
      case 'litre':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a litre' : '';
      case 'time':
        return this.registerForm.controls[field].hasError('required') ? 'You must enter a time' : '';
      default:
        break;
    }
  }
}
