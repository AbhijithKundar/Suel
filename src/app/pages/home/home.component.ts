import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color, MultiDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  servicesData: any = [];
  chartTitle = {
    title1: '',
    title2: '',
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public doughnutChartLabels: Label[] = ['profit', 'loss'];
  public doughnutChartData: MultiDataSet = [
    [350, 450]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutColors=[
    {
      backgroundColor: ['#3f51b5', '#3f51b58f' ]
    }
  ];


  public barChartColors: Color[] = [
    { backgroundColor: '#3f51b5' },
    { backgroundColor: '#3f51b58f' },
  ]
  public barChartLabels: Label[] = ['veh-001', 'veh-002', 'veh-003', 'veh-004', 'veh-005', 'veh-006', 'veh-007'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'expect' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'actual' }
  ];

  constructor(private elementRef: ElementRef, public commonser: CommonserviceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getData();
  }

  getData() {
    this.servicesData = this.commonser.getMenuData();
    this.servicesData.master.shift();
    this.servicesData.transaction.shift();
    this.servicesData.report.shift();

    this.chartTitle.title1 = 'Today all vehicles'
    this.chartTitle.title2 = 'Today comparison'
  }
  ngOnInit() {
    localStorage.pageName = 'home';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
  }

}
