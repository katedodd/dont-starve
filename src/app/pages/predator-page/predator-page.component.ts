import { Component, OnInit } from '@angular/core';
import { zoomIn } from '../../_animations/zoomIn';


@Component({
  selector: 'app-predator-page',
  templateUrl: './predator-page.component.html',
  styleUrls: ['./predator-page.component.css'],
  animations: [zoomIn],
  host: { '[@zoomIn]': '' }
})
export class PredatorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
