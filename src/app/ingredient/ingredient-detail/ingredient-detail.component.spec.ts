import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailComponent } from './ingredient-detail.component';

describe('PizzaDetailComponent', () => {
  let component: PizzaDetailComponent;
  let fixture: ComponentFixture<PizzaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
