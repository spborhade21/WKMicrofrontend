import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuListComponent } from './vertical-menu-list.component';

describe('VerticalMenuListComponent', () => {
  let component: VerticalMenuListComponent;
  let fixture: ComponentFixture<VerticalMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
