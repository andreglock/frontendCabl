import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesTableComponent } from './cases-table.component';

describe('CasesTableComponent', () => {
  let component: CasesTableComponent;
  let fixture: ComponentFixture<CasesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
