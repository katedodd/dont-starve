import { Component } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('visibilityChangedLoad', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0, height: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ]),
    trigger('visibilityChangedMain', [
      state('hidden', style({ opacity: 0, display: 'none' })),
      state('shown', style({ opacity: 1 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ]),
  ],
})
export class AppComponent {
  title = 'DST Guide';

  visibilityStateLoad = 'shown';
  visibilityStateMain = 'hidden';

  toggleDisplay() {
    this.visibilityStateLoad = 'hidden';
    this.visibilityStateMain = 'shown';
  }
}
