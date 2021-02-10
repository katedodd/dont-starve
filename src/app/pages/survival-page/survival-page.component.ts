import { Component, OnInit } from '@angular/core';
import { zoomIn } from '../../_animations/zoomIn';

@Component({
  selector: 'app-survival-page',
  templateUrl: './survival-page.component.html',
  styleUrls: ['./survival-page.component.css'],
  animations: [zoomIn],
  host: { '[@zoomIn]': '' }
})
export class SurvivalPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
