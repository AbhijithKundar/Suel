import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';

@Component({
  selector: 'app-mapping-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class MappingOverviewComponent implements OnInit {
  servicesData: any = [];


  constructor(private elementRef: ElementRef, public commonser: CommonserviceService) {
    this.getData();
  }
  getData() {
    this.servicesData = this.commonser.getMenuData().transaction;
    this.servicesData.shift();
  }
  ngOnInit() {
    localStorage.pageName = 'mapping-overview';
  }

}
