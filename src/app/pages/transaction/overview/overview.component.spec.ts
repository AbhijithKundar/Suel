import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingOverviewComponent } from './overview.component';

describe('MappingOverviewComponent', () => {
  let component: MappingOverviewComponent;
  let fixture: ComponentFixture<MappingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
