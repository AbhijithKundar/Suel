import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color, MultiDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';

@Component({
  selector: 'app-master-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class MasterOverviewComponent implements OnInit {
  servicesData: any = [];


  constructor(private elementRef: ElementRef, public commonser: CommonserviceService) {
    this.getData();
  }
  getData() {
    this.servicesData = this.commonser.getMenuData().master;
    this.servicesData.shift();
  }
  ngOnInit() {
    localStorage.pageName = 'master-overview';
  }

}
