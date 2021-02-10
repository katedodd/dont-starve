import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalPageComponent } from './survival-page.component';

describe('SurvivalPageComponent', () => {
  let component: SurvivalPageComponent;
  let fixture: ComponentFixture<SurvivalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
