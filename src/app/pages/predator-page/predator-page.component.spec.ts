import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredatorPageComponent } from './predator-page.component';

describe('PredatorPageComponent', () => {
  let component: PredatorPageComponent;
  let fixture: ComponentFixture<PredatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
