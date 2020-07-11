import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowbellBoxComponent } from './cowbell-box.component';

describe('CowbellBoxComponent', () => {
  let component: CowbellBoxComponent;
  let fixture: ComponentFixture<CowbellBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowbellBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowbellBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
