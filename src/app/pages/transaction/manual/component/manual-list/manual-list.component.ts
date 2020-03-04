import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManualDetailsDialogComponent } from '../manual-details-dialog/manual-details-dialog.component';

import { filterJson } from '../../../../../common/filters/student-filter';
import { FilterStudentService } from '../../service/filter-student.service';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { FilterDialogComponent } from 'src/app/pages/shared/filter-dialog/filter-dialog.component';
import { manualFilterJson } from 'src/app/common/filters/manual-filter';

const ELEMENT_DATA = [
  {vehicle_no: "vehicle-001", driver_number: "driver-001", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-002", driver_number: "driver-002", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-003", driver_number: "driver-003", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-004", driver_number: "driver-004", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-005", driver_number: "driver-005", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-006", driver_number: "driver-006", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
  {vehicle_no: "vehicle-007", driver_number: "driver-007", vehicle_type: "Trailer", upload_time: "08:00:06 AM", litre: "300",action: ''},
]
   
@Component({
  selector: 'sbm-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {
  displayedColumns: string[] = ['vehicle_no', 'driver_number', 'vehicle_type', 'upload_time', 'litre', 'action'];
  dataSource = new MatTableDataSource<LoadDetails>(ELEMENT_DATA);
  registerForm: FormGroup;
  loanData: any;
  filters = [
    {
      clm:"timing",
      val:"08:00:06 AM",
      name:"timing"
    },
    {
      clm:"liter",
      val:"300",
      name:"Litre"
    }
  ]
  public cardList = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    public dialog: MatDialog,  
    private formBuilder: FormBuilder,
    public filterService: FilterStudentService,
    ) { }
  
  ngOnInit() {
    localStorage.pageName = 'student';
    this.dataSource.paginator = this.paginator;
    this.loanData = [];

  }

  removeFilter(idx: number) {
    this.filters.splice(idx, 1);
  }

  openDeleteDialogue(idx: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {title: '', lblData: "Do you want to delete?", data: {}}
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  openFilter() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '1226px',
      data: {
        filterService: this.filterService,
        filterJson: manualFilterJson,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  editStudent() {
    
  }

  editItem(idx: number) { 
    console.log(this.dataSource.filteredData, idx);
    this.openDialogue(this.dataSource.filteredData[idx]);
  }

  addItem() {
    this.openDialogue({});
  }

  openDialogue(data: any) {
    const dialogRef = this.dialog.open(ManualDetailsDialogComponent, {
      width: '1226px',
      data: {data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}


export interface LoadDetails {
  vehicle_no: string;
  driver_number: string;
  vehicle_type: string;
  upload_time: string;
  litre: string;
  action: string;
}

