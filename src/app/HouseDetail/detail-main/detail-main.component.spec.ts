import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMainComponent } from './detail-main.component';

describe('DetailMainComponent', () => {
  let component: DetailMainComponent;
  let fixture: ComponentFixture<DetailMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMainComponent]
    });
    fixture = TestBed.createComponent(DetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
