import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedViewerComponent } from './tabbed-viewer.component';

describe('TabbedViewerComponent', () => {
  let component: TabbedViewerComponent;
  let fixture: ComponentFixture<TabbedViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
