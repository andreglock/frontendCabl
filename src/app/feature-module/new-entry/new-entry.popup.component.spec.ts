import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntry.PopupComponent } from './new-entry.popup.component';

describe('NewEntry.PopupComponent', () => {
  let component: NewEntry.PopupComponent;
  let fixture: ComponentFixture<NewEntry.PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEntry.PopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntry.PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
