import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousDaysComponent } from './previous-days.component';

describe('PreviousDaysComponent', () => {
  let component: PreviousDaysComponent;
  let fixture: ComponentFixture<PreviousDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
