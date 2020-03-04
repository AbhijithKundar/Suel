import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CommonserviceService } from './common/services/commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cmnService: CommonserviceService
  ) {
    localStorage.pageName = localStorage.pageName ? localStorage.pageName : 'login';
  }
  

}