import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesMainComponent } from './houses-main.component';

describe('HousesMainComponent', () => {
  let component: HousesMainComponent;
  let fixture: ComponentFixture<HousesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesMainComponent]
    });
    fixture = TestBed.createComponent(HousesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
