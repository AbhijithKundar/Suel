import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Login } from 'src/app/common/datamodels/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login;
  passwordHide = true;
  constructor(private formBuilder: FormBuilder,private elementRef: ElementRef, private route: ActivatedRoute, private router: Router) { }
 // convenience getter for easy access to form fields
 get f() { return this.loginForm.controls; }
  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#3f51b5';
    this.initAssign();
  }
  initAssign(): void{
    this.loginData = new Login();
    this.loginForm = this.buildForm();
  }
  buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  getErrorMessage(field: string) {
    switch (field) {
      case 'email':
        return this.loginForm.controls['email'].hasError('required') ? 'You must enter a email' : this.loginForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
      case 'password':
        return this.loginForm.controls[field].hasError('required') ? 'You must enter a password' : '';
      default:
        break;
    }
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    this.router.navigate(['/pages/home']);
  }
}
