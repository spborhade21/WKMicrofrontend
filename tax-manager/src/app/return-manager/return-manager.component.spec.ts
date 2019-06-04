import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnManagerComponent } from './return-manager.component';

describe('ReturnManagerComponent', () => {
  let component: ReturnManagerComponent;
  let fixture: ComponentFixture<ReturnManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
