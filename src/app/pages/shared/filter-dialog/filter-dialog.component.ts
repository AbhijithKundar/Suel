import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  filterService: any;
  fitlerJson: any;
  inputFields = {
    textInput: '',
    numberInput: '',
    dateInput: '',
    autocompleteInput: ''
  }
  selectedJson = {
    idx: 0,
    data: {},
    isParentUpdate: true,
  };
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(
    private dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.filterService = this.data.filterService;
    this.fitlerJson = this.data.filterJson;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getParentLbl(parent: any) {
    const parentName = parent.map(
      parent => {
        const parentData = this.fitlerJson.find( filter => filter.clm === parent);
        return parentData.name;
      }
    );
    return parentName.join(', ');
  }

  selectFilter(idx: number, data: any) {
    this.selectedJson.idx = idx;
    this.selectedJson.data = data;
    if(data.parent.length > 0) {
      this.selectedJson.isParentUpdate = !data.parent.some(parent => {
        const parentData = this.fitlerJson.find( filter => filter.clm === parent);
        if(parentData ==='undefined' || parentData === 'null' || parentData.selectedData.length <= 0) {
          return true;
        }
      });
    } else {
      this.selectedJson.isParentUpdate = true;
    }
  }

  addFilter() {
    let inputVal: any;
    switch (this.selectedJson.data['type']) {
      case 'text': {
        inputVal = this.inputFields.textInput;
        break;
      }
      case 'number': {
        inputVal = this.inputFields.numberInput;
        break;
      }
      case 'date': {
        inputVal = this.inputFields.dateInput;
        break;
      }
      case 'autocomplete': {
        inputVal = this.inputFields.autocompleteInput;
        break;
      }
      default: {
        break;
      }
    }

    if (inputVal !== '' && !this.selectedJson.data['selectedData'].some(filter => filter.val === this.inputFields.textInput)) {
      this.selectedJson.data['selectedData'].push({
        clm: this.selectedJson.data['clm'],
        val: inputVal,
        name: this.selectedJson.data['name']
      });
      this.inputFields = {
        textInput: '',
        numberInput: '',
        dateInput: '',
        autocompleteInput: ''
      }
    }

  }

  removeSelectData(idx: any) {
    this.selectedJson.data['selectedData'].splice(idx, 1);
  }

  clickOk(): void {
    this.dialogRef.close();
  }

}
