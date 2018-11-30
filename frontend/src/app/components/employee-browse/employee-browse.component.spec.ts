import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBrowseComponent } from './employee-browse.component';

describe('EmployeeBrowseComponent', () => {
  let component: EmployeeBrowseComponent;
  let fixture: ComponentFixture<EmployeeBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
