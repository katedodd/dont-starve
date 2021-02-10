import { Component, OnInit } from '@angular/core';
import { bounceLeftRight } from '../_animations/bounceLeftRight';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css'],
  animations: [bounceLeftRight],
  host: { '[@bounceLeftRight]': '' }
})
export class MainDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
