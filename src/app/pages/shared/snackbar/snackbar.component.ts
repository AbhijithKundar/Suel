import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  constructor(public snackBar: MatSnackBar) {}

        // this function will open up snackbar on top right position with custom background color (defined in css)
	openSnackBar(message: string, action: string, className: string) {

 	    this.snackBar.open(message, action, {
	      duration: 2000,
	      verticalPosition: 'top',
	      horizontalPosition: 'end',
	      panelClass: [className],
	    });
	 }

  ngOnInit() {
  }

}
