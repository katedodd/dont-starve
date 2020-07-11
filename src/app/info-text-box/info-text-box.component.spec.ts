import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextBoxComponent } from './info-text-box.component';

describe('InfoTextBoxComponent', () => {
  let component: InfoTextBoxComponent;
  let fixture: ComponentFixture<InfoTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
