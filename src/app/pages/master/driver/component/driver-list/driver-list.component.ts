import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { DriverDetailsDialogComponent } from '../driver-details-dialog/driver-details-dialog.component';


@Component({
  selector: 'sbm-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  listDriver = [
    {
      name: 'Driver - 001', 
      number: '1001',
      mobile:'90899878997',
      age: '43',
      licence:'xxxx-xxx-xxxx-xxxx-xxx'
    },
    {
      name: 'Driver - 002', 
      number: '1001',
      mobile:'24634735737',
      age: '34',
      licence:'xxxx-xxx-xxxx-xxxx-xxx'
    },
    {
      name: 'Driver - 003', 
      number: '1001',
      mobile:'27357474674',
      age: '28',
      licence:'xxxx-xxx-xxxx-xxxx-xxx'
    },
    {
      name: 'Driver - 005', 
      number: '1001',
      mobile:'5684573636346',
      age: '51',
      licence:'xxxx-xxx-xxxx-xxxx-xxx'
    }
  ]
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {  }

  deleteItem(idx: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: {title: '', lblData: "Do you want to delete?", data: {}}
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  addItem() {
    this.openDialogue({});
  }


  editItem(idx: number) { 
    this.openDialogue(this.listDriver[idx]);
  }

  openDialogue(data: any) {
    const dialogRef = this.dialog.open(DriverDetailsDialogComponent, {
      width: '1226px',
      data: {data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
