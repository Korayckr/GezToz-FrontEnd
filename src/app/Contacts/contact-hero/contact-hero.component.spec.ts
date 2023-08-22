import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeroComponent } from './contact-hero.component';

describe('ContactHeroComponent', () => {
  let component: ContactHeroComponent;
  let fixture: ComponentFixture<ContactHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactHeroComponent]
    });
    fixture = TestBed.createComponent(ContactHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
