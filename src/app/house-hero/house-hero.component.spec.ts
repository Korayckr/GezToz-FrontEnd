import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHeroComponent } from './house-hero.component';

describe('HouseHeroComponent', () => {
  let component: HouseHeroComponent;
  let fixture: ComponentFixture<HouseHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseHeroComponent]
    });
    fixture = TestBed.createComponent(HouseHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
