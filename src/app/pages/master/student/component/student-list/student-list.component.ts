import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentDetailsDialogComponent } from '../student-details-dialog/student-details-dialog.component';

import { filterJson } from '../../../../../common/filters/student-filter';
import { FilterStudentService } from '../../service/filter-student.service';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { FilterDialogComponent } from 'src/app/pages/shared/filter-dialog/filter-dialog.component';

const ELEMENT_DATA = [
  {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
    {loan_id: "L1001", loan_amount: "1,00,000", loan_type: "Vehicle Loan", emi_type: "Weekly", emi: "10%", total_dues: "46", pending_dues: "16", status: "Pending",action: ''},
];
@Component({
  selector: 'sbm-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['loan_id', 'loan_amount', 'loan_type', 'emi_type', 'emi', 'total_dues', 'pending_dues', 'status', 'action'];
  dataSource = new MatTableDataSource<LoadDetails>(ELEMENT_DATA);
  registerForm: FormGroup;
  loanData: any;
  filters = [
    {
      clm:"student_name",
      val:"Ajith veksih",
      name:"Student name"
    },
    {
      clm:"student_name",
      val:"Ajith",
      name:"Student name"
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
        filterJson: filterJson,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  editStudent() {
    
  }

  addStudent() {
    const dialogRef = this.dialog.open(StudentDetailsDialogComponent, {
      width: '1226px',
      data: {title: "Create user", data: []}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}


export interface LoadDetails {
  loan_id: string;
  loan_amount: string;
  loan_type: string;
  emi_type: string;
  emi: string;
  total_dues: string;
  pending_dues: string;
  status: string;
  action: string;
}

