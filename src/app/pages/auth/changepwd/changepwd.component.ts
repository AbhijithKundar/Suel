import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MustMatch } from 'src/app/common/_helpers/must-match.validator';
import { Register } from 'src/app/common/datamodels/register';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent implements OnInit {
  changepwdForm: FormGroup;
  changepwdData: Register;
  passwordHide = true;
  cpasswordHide = true;
  constructor(private formBuilder: FormBuilder,private elementRef: ElementRef, private route: ActivatedRoute, private router: Router) { }
 // convenience getter for easy access to form fields
 get f() { return this.changepwdForm.controls; }
  ngOnInit() {
    localStorage.pageName = 'login';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3f51b5';
    this.initAssign();
  }
  initAssign(): void{
    this.changepwdData = new Register();
    this.changepwdForm = this.buildForm();
  }
  buildForm(): FormGroup {
    return this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'password':
        return this.changepwdForm.controls[field].hasError('required') ? 'You must enter a password' : this.changepwdForm.controls[field].hasError('pattern') ? 'Password must be 1 digit, 1 lowercase, 1 uppercase and any 8 to 30 character length' :'';
      case 'confirmPassword':
        return this.changepwdForm.controls[field].hasError('required') ? 'You must enter a confirm password' : this.changepwdForm.controls[field].hasError('mustMatch') ? 'Passwords must match' :'';
      default:
        break;
    }
  }
  onSubmit() {
    if (this.changepwdForm.invalid) {
      return;
    }
    this.router.navigate(['/login']);
  }
}
