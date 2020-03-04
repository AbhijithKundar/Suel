import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDialogModule,
  MatChipsModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MappingOverviewComponent } from './overview/overview.component';
import { ManualListComponent } from './manual/component/manual-list/manual-list.component';
import { ManualDetailsDialogComponent } from './manual/component/manual-details-dialog/manual-details-dialog.component';


@NgModule({
  declarations: [
    MappingOverviewComponent,
    ManualListComponent,
    ManualDetailsDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    TransactionRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTabsModule,
    AgmCoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule
  ],
  entryComponents: [ManualDetailsDialogComponent]
})
export class TransactionModule { }
