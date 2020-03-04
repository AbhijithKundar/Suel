import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { 
  MatCardModule, 
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
  MatSelectModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatDialogModule, 
  MatNativeDateModule,
  MatBadgeModule,
  MatChipsModule,
  MatSnackBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonserviceService } from './common/services/commonservice.service';
import { NotfoundComponent } from './pages/shared/notfound/notfound.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { InfoDialogComponent } from './pages/shared/info-dialog/info-dialog.component';
import { ConfirmDialogComponent } from './pages/shared/confirm-dialog/confirm-dialog.component';
import { BreadcrumbComponent } from './pages/shared/breadcrumb/breadcrumb.component';
import { FilterDialogComponent } from './pages/shared/filter-dialog/filter-dialog.component';
import { SnackbarComponent } from './pages/shared/snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    MenuComponent,
    BreadcrumbComponent,
    InfoDialogComponent,
    ConfirmDialogComponent,
    FilterDialogComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatChipsModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'CDROAAAANJd_PEMs2vnU_f04htHhZhSa_9HZXsWbc66iRLah8f17kmN8QRSryZ54UMgeX7XabY zm82xuubmjRb'
    })
  ],
  providers: [
    MatDatepickerModule,
    CommonserviceService
  ],
  bootstrap: [AppComponent],
  entryComponents: [InfoDialogComponent, ConfirmDialogComponent, FilterDialogComponent]
})
export class AppModule { }
