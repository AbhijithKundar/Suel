import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { BusDetailsDialogComponent } from '../bus-details-dialog/bus-details-dialog.component';


@Component({
  selector: 'sbm-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  listBus = [
    {
      name: 'veh-001', 
      type: 'Trailler',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
    {
      name: 'veh-002', 
      type: 'Fork lift',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
    {
      name: 'veh-003', 
      type: '10 Ton pickup',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
    {
      name: 'veh-004', 
      type: '3 ton hiab',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
    {
      name: 'veh-005', 
      type: '3 ton p/c mur',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
    {
      name: 'veh-006', 
      type: 'sand trailer',
      driver:'Driver - 001',
      internal: '80',
      external: '60',
    },
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
    this.openDialogue(this.listBus[idx]);
  }

  openDialogue(data: any) {
    const dialogRef = this.dialog.open(BusDetailsDialogComponent, {
      width: '1226px',
      data: {data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
