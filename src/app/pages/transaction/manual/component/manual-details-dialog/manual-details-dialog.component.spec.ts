import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatNativeDateModule,
  MatDialogModule,
  MatSliderModule,
  MatButtonModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE,
  MatDialogRef
} from '@angular/material';
import { Router } from '@angular/router';
import { ManualDetailsDialogComponent } from './manual-details-dialog.component';


describe('ManualDetailsDialogComponent', () => {
  let component: ManualDetailsDialogComponent;
  let fixture: ComponentFixture<ManualDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManualDetailsDialogComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        MatDialogModule,
        MatSliderModule,
        MatButtonModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSelectModule,
        MatDatepickerModule,
      ],
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'de' },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
